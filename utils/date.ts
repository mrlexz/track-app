export function getFormattedDate(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function get7DaysAgo(date: Date, days: number): Date {
  const newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - days,
  );
  return newDate;
}
