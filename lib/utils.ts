import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function isoStringToDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// lib/utils.ts
export function sharePage(
  eventOrUrl: React.MouseEvent<HTMLButtonElement> | string,
  maybeTitle?: string
) {
  // If called from a click event → use current page URL
  if (typeof eventOrUrl !== "string") {
    eventOrUrl.preventDefault();
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
    return;
  }

  // If called manually with (url, title)
  const url = eventOrUrl;
  if (navigator.share) {
    navigator.share({
      title: maybeTitle || document.title,
      url,
    });
  } else {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  }
}
