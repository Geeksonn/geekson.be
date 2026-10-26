import React from 'react';

import type { Dictionary } from '@/_lib/i18n';
import SectionHeading from './sectionHeading';

type Props = {
    dict: Dictionary['method'];
};

const Method: React.FunctionComponent<Props> = ({ dict }) => {
    return (
        <section id='methode' className='bg-alt'>
            <div className='mx-auto max-w-[1160px] px-6 py-20 md:py-26'>
                <div className='mb-12 flex flex-wrap items-end justify-between gap-6'>
                    <SectionHeading eyebrow={dict.eyebrow} title={dict.title} className='max-w-[36rem]' />
                    <p className='max-w-[28rem]'>{dict.intro}</p>
                </div>
                <ol className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7'>
                    {dict.steps.map((step, index) => (
                        <li
                            key={step.title}
                            className={`border-t-[3px] pt-5 ${index === 0 ? 'border-accent' : 'border-line'}`}>
                            <h3 className='mb-2 font-title text-[21px] font-bold text-ink'>
                                {index + 1}. {step.title}
                            </h3>
                            <p className='text-base'>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Method;
