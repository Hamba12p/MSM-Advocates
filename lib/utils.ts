/**
 * Lightweight classname merger.
 * Filters falsy values and joins with a space.
 * For complex conditional merging, swap for `clsx` + `tailwind-merge` if needed.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
