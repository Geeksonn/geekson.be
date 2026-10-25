import 'server-only';

import type fr from './dictionaries/fr.json';

export type Dictionary = typeof fr;

// Every locale shown in the language switcher. A locale is only built once its dictionary exists below.
export const locales = ['fr', 'nl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

const dictionaries: Partial<Record<Locale, () => Promise<Dictionary>>> = {
    fr: () => import('./dictionaries/fr.json').then((module) => module.default),
    nl: () => import('./dictionaries/nl.json').then((module) => module.default),
    en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export const availableLocales = locales.filter((locale) => locale in dictionaries);

export const hasLocale = (locale: string): locale is Locale => locale in dictionaries;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => dictionaries[locale]!();
