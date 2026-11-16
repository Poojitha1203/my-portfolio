
const monthYearFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });
const fullDateFormat = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' });

export function parseDate(iso: string) {
  const [year, month, day = 1] = iso.split('-').map(Number);
  return new Date(year, month - 1, day);
}


export function formatMonthYear(iso: string) {
  return monthYearFormat.format(parseDate(iso));
}


export function formatFullDate(iso: string) {
  return fullDateFormat.format(parseDate(iso));
}


export function durationLabel(startIso: string, endIso: string) {
  const ms = parseDate(endIso).getTime() - parseDate(startIso).getTime();
  const weeks = Math.round(ms / (7 * 24 * 60 * 60 * 1000));
  return weeks >= 8 ? `${Math.round(weeks / 4.345)} months` : `${weeks} weeks`;
}
