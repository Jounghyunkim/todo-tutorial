import { BatteryFull, Signal, Wifi } from "lucide-react"

// 아이폰 모양 프레임(서버 컴포넌트).
// sm 미만(실제 모바일)에서는 프레임 없이 전체 화면으로 보여 준다.
export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-svh w-full overflow-hidden bg-linear-to-b from-sky-100 via-[#f2f2f7] to-[#f2f2f7] sm:h-[min(53rem,calc(100svh-3rem))] sm:w-[24.5rem] sm:rounded-[3.25rem] sm:border-[10px] sm:border-neutral-900 sm:shadow-2xl sm:shadow-black/40 sm:ring-1 sm:ring-white/30 dark:from-indigo-950 dark:via-black dark:to-black">
      {/* 상태 표시줄 + 다이내믹 아일랜드 (데스크톱 프레임에서만) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-30 hidden h-12 items-center justify-between px-8 pt-1 text-[0.8rem] font-semibold sm:flex"
      >
        <span>9:41</span>
        <span className="absolute top-2.5 left-1/2 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />
        <span className="flex items-center gap-1">
          <Signal className="size-3.5" />
          <Wifi className="size-3.5" />
          <BatteryFull className="size-5" />
        </span>
      </div>

      <div className="h-full pt-4 sm:pt-12">{children}</div>

      {/* 홈 인디케이터 */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-1.5 left-1/2 z-30 hidden h-1 w-32 -translate-x-1/2 rounded-full bg-foreground/80 sm:block"
      />
    </div>
  )
}
