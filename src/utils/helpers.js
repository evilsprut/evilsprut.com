import { pluralize } from 'numeralize-ru';

export function formatReadingTime(minutes) {
  const minutesPluralized = pluralize(minutes, 'минута', 'минуты', 'минут');
  let cups = Math.round(minutes / 5);
  return `${new Array(cups || 1)
    .fill('⏰')
    .join('')} ${minutes} ${minutesPluralized}`;
}

// `lang` is optional and will default to the current user agent locale
export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  date = new Date(date);
  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean);
  return date.toLocaleDateString(...args);
}
