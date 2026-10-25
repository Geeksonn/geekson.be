'use client';

import React from 'react';

type Props = {
    toDarkLabel: string;
    toLightLabel: string;
};

// The icon and label follow the `data-theme` attribute through CSS, so the server HTML never mismatches.
const ThemeToggle: React.FunctionComponent<Props> = ({ toDarkLabel, toLightLabel }) => {
    const toggle = () => {
        const root = document.documentElement;
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try {
            localStorage.setItem('theme', next);
        } catch {
            // Private mode or blocked storage: the switch still works for this visit.
        }
    };

    return (
        <button
            type='button'
            onClick={toggle}
            className='inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-chip'>
            <span className='dark:hidden'>
                <svg aria-hidden='true' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z' />
                </svg>
                <span className='sr-only'>{toDarkLabel}</span>
            </span>
            <span className='hidden dark:inline'>
                <svg aria-hidden='true' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <circle cx='12' cy='12' r='4' />
                    <path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
                </svg>
                <span className='sr-only'>{toLightLabel}</span>
            </span>
        </button>
    );
};

export default ThemeToggle;
