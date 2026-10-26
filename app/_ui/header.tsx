import React from 'react';

import type { Dictionary, Locale } from '@/_lib/i18n';
import { locales } from '@/_lib/i18n';
import Logo from './logo';
import ThemeToggle from './themeToggle';

type Props = {
    dict: Dictionary['nav'];
    lang: Locale;
    availableLocales: Locale[];
};

const Header: React.FunctionComponent<Props> = ({ dict, lang, availableLocales }) => {
    return (
        <header className='sticky top-0 z-50 border-b border-line bg-alt/90 backdrop-blur'>
            <div className='mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-4 py-3 sm:px-6'>
                <a href='#top' aria-label={dict.home} className='rounded-lg'>
                    <Logo />
                </a>
                <nav aria-label={dict.label} className='flex items-center gap-2 text-[15px] font-medium lg:gap-7'>
                    <a href='#services' className='hidden text-ink hover:text-teal lg:inline'>
                        {dict.services}
                    </a>
                    <a href='#realisations' className='hidden text-ink hover:text-teal lg:inline'>
                        {dict.work}
                    </a>
                    <a href='#methode' className='hidden text-ink hover:text-teal lg:inline'>
                        {dict.method}
                    </a>
                    <div className='flex items-center gap-1'>
                        <ul aria-label={dict.languages} className='flex gap-0.5 text-[13px] font-semibold uppercase'>
                            {locales.map((locale) => (
                                <li key={locale}>
                                    {availableLocales.includes(locale) ? (
                                        <a
                                            href={`/${locale}/`}
                                            hrefLang={locale}
                                            aria-current={locale === lang ? 'page' : undefined}
                                            className={`inline-flex h-11 min-w-9 items-center justify-center rounded-md px-1.5 ${
                                                locale === lang ? 'text-ink' : 'text-muted hover:text-ink'
                                            }`}>
                                            <span className={locale === lang ? 'rounded-md bg-chip px-2 py-1' : 'px-2 py-1'}>
                                                {locale}
                                            </span>
                                        </a>
                                    ) : (
                                        // Translation not published yet.
                                        <span className='inline-flex h-11 min-w-9 items-center justify-center px-3.5 text-muted opacity-50'>
                                            {locale}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <ThemeToggle toDarkLabel={dict.themeToDark} toLightLabel={dict.themeToLight} />
                    </div>
                    {/* On phones the hero button already leads to the contact section. */}
                    <a
                        href='#contact'
                        className='hidden min-h-11 items-center rounded-full bg-btn px-4 text-btn-ink transition-opacity hover:opacity-90 sm:inline-flex lg:px-5'>
                        <span className='lg:hidden'>{dict.ctaShort}</span>
                        <span className='hidden lg:inline'>{dict.cta}</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
