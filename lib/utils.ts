import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function isoStringToDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
// lib/utils.ts
export function sharePage(url: string, title?: string) {
  if (navigator.share) {
    navigator.share({
      title: title || document.title,
      url,
    })
  } else {
    // fallback → copy to clipboard
    navigator.clipboard.writeText(url)
    alert("Link copied to clipboard!")
  }
}
