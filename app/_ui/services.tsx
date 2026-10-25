import React from 'react';

import type { Dictionary } from '@/_lib/i18n';
import SectionHeading from './sectionHeading';

type Props = {
    dict: Dictionary['services'];
};

const Services: React.FunctionComponent<Props> = ({ dict }) => {
    return (
        <section id='services'>
            <div className='mx-auto max-w-[1160px] px-6 py-20 md:py-26'>
                <div className='mb-12 flex flex-wrap items-end justify-between gap-6'>
                    <SectionHeading eyebrow={dict.eyebrow} title={dict.title} className='max-w-[36rem]' />
                    <p className='max-w-[24rem]'>{dict.aside}</p>
                </div>
                <ol className='border-t border-line'>
                    {dict.items.map((service, index) => (
                        <li key={service.title} className='flex flex-wrap items-baseline gap-x-10 gap-y-3 border-b border-line py-8'>
                            <span aria-hidden='true' className='w-10 text-[15px] font-bold text-teal'>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className='min-w-0 flex-[1_1_240px] font-title text-[26px] font-bold tracking-[-0.02em] text-ink'>
                                {service.title}
                            </h3>
                            <p className='min-w-0 flex-[2_1_380px]'>{service.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Services;
