import { v4 as uuidv4 } from "uuid";

export function genUuid(): string {
  return uuidv4();
}

export function genUniSeq(prefix = ""): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `${prefix}${randomPart}${timestamp}`;
}

export function removeYamlMarkers(text: string): string {
  return text.replace(/^```yaml\s*|\s*```$/g, "");
}

export function parseEventData(data: string): unknown {
  const lines = data.split("\n");
  const dataLine = lines.find((line) => line.startsWith("data:"));
  if (!dataLine) {
    throw new Error("invalid event data: " + data);
  }
  const jsonStr = dataLine.replace("data: ", "");
  return JSON.parse(jsonStr);
}

export function isSmScreen(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export function genNonceStr(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}

export function bytesToKB(bytes: number): string {
  return (bytes / 1024).toFixed(1);
}

export function bytesToMB(bytes: number): string {
  return (bytes / 1024 / 1024).toFixed(1);
}

export function upperFirstChar(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function removeUrlSearchParams(originalUrl: string): string {
  if (!originalUrl) return "";
  try {
    const url = new URL(originalUrl);
    url.search = "";
    return url.toString();
  } catch {
    return originalUrl;
  }
}
