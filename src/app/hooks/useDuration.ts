import dayjs from 'dayjs';
import { usePlurals } from './usePlurals';

export const useDuration = (lang: 'en' | 'ru') => {
  const plural = usePlurals(lang);
  const monthRules = {
    ru: ['месяц', 'месяца', 'месяцев'],
    en: ['month', 'months', 'months'],
  }[lang];
  const yearRules = {
    ru: ['года', 'года', 'лет'],
    en: ['year', 'years', 'years'],
  }[lang];
  return (from: string, to?: string) => {
    const start = dayjs(from);
    const end = dayjs(to).isValid() ? dayjs(to) : dayjs();
    const difference = dayjs(end).diff(dayjs(start), 'months');
    const years = Math.floor(difference / 12);
    const months = difference % 12;
    if (years < 1) return plural(months, monthRules);
    return `${years}.${plural(months, yearRules)}`;
  };
};
