const locale = { ru: 'ru-RU', en: 'en-EN' };

export const usePlurals = (lang: 'ru' | 'en') => {
  return (value: number, rules: string[]) => {
    const result = new Intl.PluralRules(locale[lang]).select(value);
    switch (result) {
      case 'one':
        return `${value} ${rules[0]}`;
      case 'few':
        return `${value} ${rules[1]}`;
      default:
        return `${value} ${rules[2]}`;
    }
  };
};
