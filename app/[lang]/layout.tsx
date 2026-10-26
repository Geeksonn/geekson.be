import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';

import '../globals.css';
import { availableLocales, defaultLocale, getDictionary, hasLocale } from '@/_lib/i18n';
import { siteUrl } from '@/_lib/site';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: ['700', '800'],
    variable: '--font-bricolage',
});

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-jakarta',
});

// Runs before the first paint: saved choice first, then the OS preference.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)t='dark';if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`;

export const generateStaticParams = () => availableLocales.map((lang) => ({ lang }));

export const generateMetadata = async ({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> => {
    const { lang } = await params;
    if (!hasLocale(lang)) return {};

    const dict = await getDictionary(lang);

    return {
        metadataBase: new URL(siteUrl),
        title: dict.meta.title,
        description: dict.meta.description,
        alternates: {
            canonical: `/${lang}/`,
            languages: {
                ...Object.fromEntries(availableLocales.map((locale) => [locale, `/${locale}/`])),
                'x-default': `/${defaultLocale}/`,
            },
        },
        icons: {
            icon: [
                { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
                { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            ],
            apple: '/apple-touch-icon.png',
        },
        manifest: '/site.webmanifest',
    };
};

const RootLayout = async ({ children, params }: LayoutProps<'/[lang]'>) => {
    const { lang } = await params;
    if (!hasLocale(lang)) notFound();

    return (
        <html lang={lang} className={`${bricolage.variable} ${jakarta.variable}`} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
