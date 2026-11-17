import type { Todo } from "@/lib/types";

interface TodoStatsProps {
  todos: Todo[];
}

const RADIUS = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// 홈 화면 위젯처럼 보이는 요약 카드: 진행률 링 + 남은 일 + 완료한 일
export function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const done = todos.filter((todo) => todo.completed).length;
  const active = total - done;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <section aria-label="요약" className="grid grid-cols-2 gap-3">
      <div className="col-span-2 flex items-center gap-4 rounded-3xl bg-linear-to-br from-blue-500 via-indigo-500 to-fuchsia-500 p-4 text-white shadow-lg shadow-indigo-500/30">
        <svg
          viewBox="0 0 64 64"
          className="size-16 shrink-0 -rotate-90"
          aria-hidden
        >
          <circle
            cx="32"
            cy="32"
            r={RADIUS}
            fill="none"
            strokeWidth="7"
            className="stroke-white/25"
          />
          <circle
            cx="32"
            cy="32"
            r={RADIUS}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            className="stroke-white transition-[stroke-dashoffset] duration-700"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - percent / 100)}
          />
        </svg>
        <div>
          <p className="text-xs font-semibold text-white/80">오늘의 진행률</p>
          <p className="text-3xl leading-tight font-bold tabular-nums">
            {percent}%
          </p>
          <p className="text-xs text-white/80 tabular-nums">
            {total}개 중 {done}개 끝냈어요
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-linear-to-br from-orange-400 to-rose-500 p-4 text-white shadow-lg shadow-rose-500/25">
        <p className="text-xs font-semibold text-white/85">남은 일</p>
        <p className="text-3xl font-bold tabular-nums">{active}</p>
      </div>

      <div className="rounded-3xl bg-linear-to-br from-emerald-400 to-teal-500 p-4 text-white shadow-lg shadow-teal-500/25">
        <p className="text-xs font-semibold text-white/85">완료한 일</p>
        <p className="text-3xl font-bold tabular-nums">{done}</p>
      </div>
    </section>
  );
}
