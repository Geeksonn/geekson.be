import React from 'react';
import Image from 'next/image';

import type { Dictionary } from '@/_lib/i18n';
import SectionHeading from './sectionHeading';
import appicoleScreens from '../../public/images/appicole.png';

type Props = {
    dict: Dictionary['work'];
};

const Work: React.FunctionComponent<Props> = ({ dict }) => {
    const { featured } = dict;

    return (
        <section id='realisations' className='bg-alt'>
            <div className='mx-auto max-w-[1160px] px-6 py-20 md:py-26'>
                <SectionHeading eyebrow={dict.eyebrow} title={dict.title} className='mb-12' />
                <div className='flex flex-wrap items-center gap-12'>
                    <div className='flex min-w-0 flex-[1_1_420px] justify-center rounded-3xl bg-placeholder p-6'>
                        <Image
                            src={appicoleScreens}
                            alt={featured.imageAlt}
                            sizes='(min-width: 1160px) 480px, 90vw'
                            className='h-auto w-full max-w-[480px]'
                        />
                    </div>
                    <div className='min-w-0 flex-[1_1_400px]'>
                        <p className='mb-3 text-sm font-semibold text-teal'>{featured.kind}</p>
                        <h3 className='mb-4 font-title text-[38px] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink'>
                            {featured.name}
                        </h3>
                        <p className='mb-6'>{featured.description}</p>
                        <ul className='flex flex-wrap gap-2.5'>
                            {featured.features.map((feature) => (
                                <li
                                    key={feature}
                                    className='rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-ink'>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='mt-14 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5'>
                    {dict.ecosystem.map((tool) => (
                        <article key={tool.name} className='rounded-2xl border border-line bg-surface p-7'>
                            <p className='mb-2 text-[13px] font-bold tracking-[0.08em] text-teal uppercase'>
                                {tool.audience}
                            </p>
                            <h3 className='mb-2 font-title text-[23px] font-bold text-ink'>{tool.name}</h3>
                            <p>{tool.description}</p>
                        </article>
                    ))}
                </div>
                <p className='mt-6 text-[15px] text-muted'>{dict.note}</p>
            </div>
        </section>
    );
};

export default Work;
