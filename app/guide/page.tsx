import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { CATEGORIES, PRIORITIES, SORT_OPTIONS, TODO_FILTERS } from "@/lib/types"

export const metadata: Metadata = {
  title: "사용법 · todo",
  description: "Todo 앱의 기본 사용법과 단축키를 안내합니다.",
}

const labels = (items: { label: string }[]) =>
  items.map((item) => item.label).join(" · ")

const SECTIONS = [
  {
    emoji: "✍️",
    title: "할 일 추가하기",
    steps: [
      "화면 아래 입력창에 할 일을 적고 Enter 키나 + 버튼을 누르세요.",
      `추가하기 전에 우선순위(${labels(PRIORITIES)})를 고를 수 있어요. 기본값은 ‘보통’이에요.`,
      "날짜 칸에서 마감일을 지정할 수 있어요. 비워 두면 마감일 없이 추가돼요.",
      `카테고리(${labels(CATEGORIES)})를 붙여 두면 나중에 모아 보기 편해요.`,
    ],
  },
  {
    emoji: "✅",
    title: "완료 · 편집 · 삭제",
    steps: [
      "할 일 왼쪽의 동그라미를 누르면 완료로 표시되고, 다시 누르면 취소돼요.",
      "할 일 텍스트를 더블클릭하면 바로 편집할 수 있어요. Enter로 저장, Esc로 취소해요.",
      "편집 중 다른 곳을 누르면 입력한 내용이 자동으로 저장돼요.",
      "휴지통 버튼을 누르면 할 일이 삭제돼요.",
    ],
  },
  {
    emoji: "🔎",
    title: "찾기와 정리",
    steps: [
      "검색창에 단어를 입력하면 해당 할 일만 보여요.",
      `상태 필터(${labels(TODO_FILTERS)})로 진행 상황별로 볼 수 있어요.`,
      "카테고리 필터로 업무 · 개인 · 쇼핑 할 일만 골라 볼 수 있어요.",
      `정렬 기준(${labels(SORT_OPTIONS)})을 바꿔 원하는 순서로 볼 수 있어요.`,
    ],
  },
  {
    emoji: "💡",
    title: "알아 두면 좋은 점",
    steps: [
      "할 일은 이 브라우저(localStorage)에만 저장돼요. 다른 기기나 브라우저와는 공유되지 않아요.",
      "입력창 밖에서 D 키를 누르면 라이트/다크 모드가 전환돼요.",
      "상단 요약 위젯에서 남은 일 · 완료한 일 개수와 진행률을 한눈에 확인할 수 있어요. 진행률은 마감일과 관계없이 전체 할 일 중 완료한 비율이에요.",
    ],
  },
]

export default function GuidePage() {
  return (
    <main className="min-h-svh bg-linear-to-br from-fuchsia-300 via-violet-300 to-sky-300 px-4 py-10 dark:from-fuchsia-950 dark:via-indigo-950 dark:to-slate-950">
      <div className="mx-auto flex max-w-2xl flex-col gap-8">
        <Link
          href="/"
          className="flex w-fit items-center gap-1.5 rounded-full bg-white/50 px-3 py-1.5 text-sm font-semibold text-foreground/80 backdrop-blur-md transition-colors hover:bg-white/70 dark:bg-white/10 dark:hover:bg-white/20"
        >
          <ArrowLeft className="size-4" />
          할 일로 돌아가기
        </Link>

        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-black tracking-tight">사용법 안내</h1>
          <p className="text-lg text-foreground/75">
            Todo 앱을 처음 쓰신다면 아래 내용을 먼저 살펴보세요.
          </p>
        </header>

        <div className="flex flex-col gap-4">
          {SECTIONS.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
            >
              <h2 className="mb-3 flex items-center gap-2 text-xl font-bold tracking-tight">
                <span aria-hidden>{section.emoji}</span>
                {section.title}
              </h2>
              <ul className="flex list-disc flex-col gap-2 pl-5 text-[0.95rem] leading-relaxed text-foreground/85 marker:text-foreground/40">
                {section.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
