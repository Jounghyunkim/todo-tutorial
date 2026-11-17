"use client";

import { CATEGORY_FILTERS, type CategoryFilter } from "@/lib/types";
import { SegmentButton, SegmentGroup } from "@/components/segmented";

interface TodoCategoryFilterProps {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
}

export function TodoCategoryFilter({
  value,
  onChange,
}: TodoCategoryFilterProps) {
  return (
    <SegmentGroup aria-label="카테고리 필터">
      {CATEGORY_FILTERS.map((item) => (
        <SegmentButton
          key={item.value}
          selected={item.value === value}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </SegmentButton>
      ))}
    </SegmentGroup>
  );
}
