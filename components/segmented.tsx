"use client";

import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// shadcn Button을 iOS 세그먼트 컨트롤(회색 트랙 + 흰 알약)처럼 쓰기 위한 래퍼.
// components/ui는 직접 수정하지 않고 이 래퍼에서 스타일만 덮어쓴다.

interface SegmentGroupProps extends ComponentProps<"div"> {
  "aria-label": string;
}

export function SegmentGroup({ className, ...props }: SegmentGroupProps) {
  return (
    <div
      role="radiogroup"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full bg-black/6 p-0.5 dark:bg-white/10",
        className
      )}
      {...props}
    />
  );
}

interface SegmentButtonProps
  extends Omit<ComponentProps<typeof Button>, "variant" | "role"> {
  selected: boolean;
}

export function SegmentButton({
  selected,
  className,
  ...props
}: SegmentButtonProps) {
  return (
    <Button
      type="button"
      size="sm"
      variant={selected ? "default" : "outline"}
      role="radio"
      aria-checked={selected}
      className={cn(
        "h-7 rounded-full px-3 text-xs font-semibold",
        selected
          ? "bg-white text-foreground shadow-sm hover:bg-white dark:bg-white/25 dark:text-white dark:hover:bg-white/25"
          : "border-transparent bg-transparent text-foreground/60 shadow-none hover:bg-transparent hover:text-foreground dark:border-transparent dark:bg-transparent",
        className
      )}
      {...props}
    />
  );
}
