import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isoStringToDate(isoString: string) {
  const date = new Date(isoString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

export function isoStringToTime(isoString: string) {
  const date = new Date(isoString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours % 12 || 12}:${minutes
    .toString()
    .padStart(2, "0")}${hours >= 12 ? "pm" : "am"}`;
  return formattedTime;
}
