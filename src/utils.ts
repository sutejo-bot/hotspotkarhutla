import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { HotspotTimeRange } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTimeRangeLabel(range: HotspotTimeRange): string {
  switch (range) {
    case "now":
      return "Saat Ini";
    case "12h":
      return "12 Jam Lalu";
    case 1:
      return "1 Hari";
    case 7:
      return "7 Hari";
    case 30:
      return "30 Hari";
    default:
      return `${range} Hari`;
  }
}

export function getTimeRangeDescription(range: HotspotTimeRange): string {
  switch (range) {
    case "now":
      return "Pass Satelit Terkini (Real-time)";
    case "12h":
      return "12 Jam Terakhir";
    case 1:
      return "24 Jam Terakhir";
    case 7:
      return "7 Hari Terakhir";
    case 30:
      return "30 Hari Terakhir";
    default:
      return `${range} Hari Terakhir`;
  }
}

export function formatDateWITA(date: Date): string {
  return date.toLocaleDateString("id-ID", {
    timeZone: "Asia/Makassar",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatTimeWITA(date: Date): string {
  return date.toLocaleTimeString("id-ID", {
    timeZone: "Asia/Makassar",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }) + " WITA";
}

export function formatHotspotRelativeTime(detectedAt: Date, daysAgo: number = 0): string {
  const diffMs = Date.now() - new Date(detectedAt).getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffMinutes >= 0 && diffMinutes < 60) {
    return `${Math.max(1, diffMinutes)} Menit Lalu`;
  }
  if (diffHours >= 1 && diffHours <= 12) {
    return `${diffHours} Jam Lalu`;
  }
  if (daysAgo === 0 || diffHours < 24) {
    return "Hari Ini";
  }
  return `${daysAgo} Hari Lalu`;
}

