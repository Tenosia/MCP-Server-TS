export function getIsoTimestr(): string {
  return new Date().toISOString();
}

export function getTimestamp(): number {
  return Math.floor(Date.now() / 1000);
}

export function getMillisecond(): number {
  return Date.now();
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function msToSeconds(ms: number): string {
  return (ms / 1000).toFixed(2);
}
