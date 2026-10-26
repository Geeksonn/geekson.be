import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

import './globals.css';
import Logo from '@/_ui/logo';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: ['800'],
    variable: '--font-bricolage',
});

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-jakarta',
});

// Same as the root layout: apply the saved or OS theme before the first paint.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)t='dark';if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`;

// The URL carries no language, so the page speaks all three.
const messages = [
    { lang: 'fr', title: 'Page introuvable', link: 'Retour à l’accueil' },
    { lang: 'nl', title: 'Pagina niet gevonden', link: 'Terug naar de homepage' },
    { lang: 'en', title: 'Page not found', link: 'Back to the homepage' },
];

export const metadata: Metadata = {
    title: '404 — Geekson Software',
};

const GlobalNotFound = () => {
    return (
        <html lang='fr' className={`${bricolage.variable} ${jakarta.variable}`} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body>
                <main className='mx-auto flex min-h-screen max-w-[1160px] flex-col justify-center gap-12 px-6 py-16'>
                    <Link href='/fr/' aria-label='Geekson'>
                        <Logo />
                    </Link>
                    <p
                        aria-hidden='true'
                        className='font-title text-[clamp(96px,18vw,200px)] leading-none font-extrabold tracking-[-0.05em] text-ink'>
                        404
                    </p>
                    <ul className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 border-t border-line pt-8'>
                        {messages.map((message) => (
                            <li key={message.lang} lang={message.lang}>
                                <h1 className='mb-2 font-title text-2xl font-extrabold text-ink'>{message.title}</h1>
                                <Link
                                    href={`/${message.lang}/`}
                                    className='font-semibold text-teal underline underline-offset-4 hover:text-ink'>
                                    {message.link} →
                                </Link>
                            </li>
                        ))}
                    </ul>
                </main>
            </body>
        </html>
    );
};

export default GlobalNotFound;
