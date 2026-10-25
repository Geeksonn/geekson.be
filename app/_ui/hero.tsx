import React from 'react';

import type { Dictionary } from '@/_lib/i18n';

const ArrowIcon: React.FunctionComponent = () => (
    <svg aria-hidden='true' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M5 12h14M13 6l6 6-6 6' />
    </svg>
);

// Decorative "app window" illustrating the kind of tools Geekson builds.
const AppWindow: React.FunctionComponent = () => (
    <div aria-hidden='true' className='overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_60px_-30px_rgba(9,44,99,0.35)]'>
        <div className='flex gap-1.5 border-b border-line px-4 py-3.5'>
            <span className='size-2.5 rounded-full bg-placeholder' />
            <span className='size-2.5 rounded-full bg-placeholder' />
            <span className='size-2.5 rounded-full bg-placeholder' />
        </div>
        <div className='flex'>
            <div className='flex w-[30%] flex-col gap-3 bg-bg px-4 py-5'>
                <span className='h-2.5 w-[70%] rounded-full bg-ink' />
                <span className='h-2 rounded-full bg-placeholder' />
                <span className='h-2 w-[80%] rounded-full bg-placeholder' />
                <span className='h-2 w-[60%] rounded-full bg-placeholder' />
            </div>
            <div className='flex flex-1 flex-col gap-4 p-5'>
                <div className='grid grid-cols-3 gap-2.5'>
                    <span className='h-14 rounded-[10px] bg-chip' />
                    <span className='h-14 rounded-[10px] bg-placeholder' />
                    <span className='h-14 rounded-[10px] bg-placeholder' />
                </div>
                <div className='flex h-36 items-end gap-2 rounded-[10px] bg-bg p-3.5'>
                    <span className='h-[40%] flex-1 rounded bg-bar' />
                    <span className='h-[65%] flex-1 rounded bg-bar' />
                    <span className='h-[50%] flex-1 rounded bg-bar' />
                    <span className='h-[85%] flex-1 rounded bg-accent' />
                    <span className='h-[70%] flex-1 rounded bg-bar' />
                </div>
                <span className='h-2 rounded-full bg-placeholder' />
                <span className='h-2 w-[70%] rounded-full bg-placeholder' />
            </div>
        </div>
    </div>
);

type Props = {
    dict: Dictionary['hero'];
};

const Hero: React.FunctionComponent<Props> = ({ dict }) => {
    return (
        <section id='top' className='bg-alt'>
            <div className='mx-auto flex max-w-[1160px] flex-wrap items-center gap-14 px-6 pt-16 pb-20 md:pt-24 md:pb-26'>
                <div className='min-w-0 flex-[1_1_480px]'>
                    <p className='mb-5 inline-flex items-center gap-2.5 rounded-full bg-chip px-3.5 py-1.5 text-sm font-semibold text-teal'>
                        <span aria-hidden='true' className='size-2 rounded-full bg-accent' />
                        {dict.badge}
                    </p>
                    <h1 className='font-title text-[clamp(44px,6vw,76px)] leading-none font-extrabold tracking-[-0.04em] text-ink'>
                        {dict.title}
                    </h1>
                    <p className='mt-7 max-w-[34rem] text-[19px]'>{dict.intro}</p>
                    <div className='mt-10 flex flex-wrap gap-3.5'>
                        <a
                            href='#contact'
                            className='inline-flex items-center gap-2.5 rounded-full bg-btn px-7 py-4 font-semibold text-btn-ink transition-opacity hover:opacity-90'>
                            {dict.primary}
                            <ArrowIcon />
                        </a>
                        <a
                            href='#realisations'
                            className='inline-flex items-center rounded-full border-[1.5px] border-outline px-7 py-4 font-semibold text-ink transition-colors hover:border-ink'>
                            {dict.secondary}
                        </a>
                    </div>
                </div>
                <div className='hidden min-w-0 flex-[1_1_380px] sm:block'>
                    <AppWindow />
                </div>
            </div>
        </section>
    );
};

export default Hero;
