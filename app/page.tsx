import Link from "next/link"

import { PhoneFrame } from "@/components/phone-frame"
import { TodoList } from "@/components/todo-list"
import { AuroraText } from "@/components/ui/aurora-text"

const FEATURES = ["이 브라우저에만 저장", "더블클릭으로 바로 편집", "다크 모드 · D 키"]

export default function Page() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-linear-to-br from-fuchsia-300 via-violet-300 to-sky-300 dark:from-fuchsia-950 dark:via-indigo-950 dark:to-slate-950">
      {/* 배경 블롭 — 천천히 떠다니는 컬러 글로우 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float absolute -top-24 -left-24 size-[28rem] rounded-full bg-pink-400/60 blur-3xl dark:bg-pink-600/30" />
        <div
          className="animate-float absolute top-1/3 -right-32 size-[32rem] rounded-full bg-sky-400/60 blur-3xl dark:bg-sky-600/30"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="animate-float absolute -bottom-32 left-1/4 size-[30rem] rounded-full bg-amber-300/60 blur-3xl dark:bg-violet-600/30"
          style={{ animationDelay: "-11s" }}
        />
      </div>

      <div className="mx-auto flex min-h-svh max-w-6xl items-center justify-center gap-16 px-0 py-0 sm:px-4 sm:py-6 lg:justify-between lg:px-10">
        {/* 왼쪽 히어로 (큰 화면에서만) */}
        <section className="hidden max-w-md flex-col gap-6 lg:flex">
          <p className="w-fit rounded-full bg-white/50 px-3 py-1 text-xs font-semibold tracking-wide text-foreground/70 backdrop-blur-md dark:bg-white/10">
            ✦ 미리 알림처럼 가볍게
          </p>
          <p className="text-8xl leading-none font-black tracking-tighter">
            <AuroraText>Todo</AuroraText>
          </p>
          <p className="text-2xl font-semibold tracking-tight text-foreground/80">
            할 일을, 가장 아름답게.
          </p>
          <ul className="flex flex-wrap gap-2">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="rounded-full border border-white/60 bg-white/40 px-3.5 py-1.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/10"
              >
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/guide"
            className="w-fit text-sm font-semibold text-foreground/70 underline-offset-4 hover:text-foreground hover:underline"
          >
            처음이신가요? 사용법 보기 →
          </Link>
        </section>

        {/* 아이폰 — 큰 화면에서는 살짝 기울어져 있다가 마우스를 올리면 바로 선다 */}
        <div className="w-full sm:w-auto lg:-rotate-2 lg:transition-transform lg:duration-500 lg:hover:rotate-0">
          <PhoneFrame>
            <TodoList />
          </PhoneFrame>
        </div>
      </div>
    </main>
  )
}
