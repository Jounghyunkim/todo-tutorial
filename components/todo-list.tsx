"use client";

import { useState } from "react";
import type {
  CategoryFilter,
  SortBy,
  TodoFilter as TodoFilterValue,
} from "@/lib/types";
import { matchesSearch, sortTodos } from "@/lib/todo-utils";
import { useTodos } from "@/hooks/use-todos";
import { TodoInput } from "@/components/todo-input";
import { TodoFilter } from "@/components/todo-filter";
import { TodoCategoryFilter } from "@/components/todo-category-filter";
import { TodoSort } from "@/components/todo-sort";
import { TodoSearch } from "@/components/todo-search";
import { TodoItem } from "@/components/todo-item";
import { TodoStats } from "@/components/todo-stats";

export function TodoList() {
  const { todos, loaded, addTodo, toggleTodo, deleteTodo, editTodo } =
    useTodos();
  const [filter, setFilter] = useState<TodoFilterValue>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [sortBy, setSortBy] = useState<SortBy>("created");
  const [query, setQuery] = useState("");

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    })
    .filter(
      (todo) => categoryFilter === "all" || todo.category === categoryFilter
    )
    .filter((todo) => matchesSearch(todo, query));
  const visibleTodos = sortTodos(filteredTodos, sortBy);

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* 스크롤 영역: 큰 제목, 요약 위젯, 검색·필터, 목록 */}
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 pt-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <h1 className="px-1 text-[2.125rem] leading-tight font-bold tracking-tight">
          할 일
        </h1>

        <TodoStats todos={todos} />

        <div className="flex flex-col gap-3">
          <TodoSearch value={query} onChange={setQuery} />
          <TodoFilter value={filter} onChange={setFilter} />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <TodoCategoryFilter
              value={categoryFilter}
              onChange={setCategoryFilter}
            />
            <TodoSort value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        {loaded && visibleTodos.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-foreground/15 bg-white/50 py-10 text-center text-sm text-muted-foreground backdrop-blur-md dark:bg-white/5">
            아직 할 일이 없습니다. 아래에 입력해 추가해보세요.
          </p>
        ) : (
          <ul className="flex flex-col divide-y divide-black/5 overflow-hidden rounded-3xl bg-white/80 shadow-sm backdrop-blur-xl dark:divide-white/10 dark:bg-white/8">
            {visibleTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </ul>
        )}
      </div>

      {/* 하단 입력 바 */}
      <TodoInput onAdd={addTodo} />
    </div>
  );
}
