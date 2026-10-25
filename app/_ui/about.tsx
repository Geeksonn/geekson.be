import React from 'react';

import type { Dictionary } from '@/_lib/i18n';
import { skills, socialLinks } from '@/_lib/site';
import SectionHeading from './sectionHeading';

const pillLink =
    'inline-flex min-h-11 items-center rounded-full border border-outline px-4 text-sm font-semibold text-ink transition-colors hover:border-ink';

type Props = {
    dict: Dictionary['about'];
};

const About: React.FunctionComponent<Props> = ({ dict }) => {
    return (
        <section id='a-propos'>
            <div className='mx-auto flex max-w-[1160px] flex-wrap items-center gap-14 px-6 py-20 md:py-26'>
                <div className='flex max-w-[420px] min-w-0 flex-[1_1_320px] flex-col gap-7 rounded-3xl border border-line bg-surface p-9 shadow-[0_30px_60px_-36px_rgba(9,44,99,0.35)]'>
                    <div className='flex items-center gap-4'>
                        <span
                            aria-hidden='true'
                            className='relative flex size-16 shrink-0 items-center justify-center rounded-2xl bg-logo font-title text-[28px] font-extrabold tracking-[-0.04em] text-white'>
                            OS
                            <span className='absolute right-2 bottom-2 size-[9px] rounded-[3px] bg-accent' />
                        </span>
                        <div>
                            <p className='font-title text-2xl leading-tight font-extrabold tracking-[-0.02em] text-ink'>
                                Olivier Sputael
                            </p>
                            <p className='mt-1 text-[15px] text-muted'>{dict.role}</p>
                        </div>
                    </div>
                    <dl className='grid grid-cols-[auto_1fr] gap-x-6 gap-y-3.5 border-t border-line pt-6 text-[15px]'>
                        {dict.facts.map((fact) => (
                            <React.Fragment key={fact.label}>
                                <dt className='text-muted'>{fact.label}</dt>
                                <dd className='font-semibold text-ink'>{fact.value}</dd>
                            </React.Fragment>
                        ))}
                    </dl>
                    <div className='flex flex-wrap gap-2.5'>
                        <a href={socialLinks.linkedIn} className={pillLink}>
                            LinkedIn ↗
                        </a>
                        <a href={socialLinks.gitHub} className={pillLink}>
                            GitHub ↗
                        </a>
                    </div>
                </div>
                <div className='min-w-0 flex-[1_1_440px]'>
                    <SectionHeading eyebrow={dict.eyebrow} title={dict.title} className='mb-6' />
                    {dict.paragraphs.map((paragraph) => (
                        <p key={paragraph} className='mb-4 last:mb-8'>
                            {paragraph}
                        </p>
                    ))}
                    <ul className='flex flex-wrap gap-2.5'>
                        {skills.map((skill) => (
                            <li
                                key={skill}
                                className='rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-semibold text-ink'>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
