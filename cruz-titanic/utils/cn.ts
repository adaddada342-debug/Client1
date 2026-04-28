/**
 * Tiny className combiner — no clsx/tailwind-merge dependency.
 * Filters falsy values and joins with single spaces.
 */
export function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(" ");
}
