import React from 'react';

import type { Dictionary } from '@/_lib/i18n';
import { contactEmail, socialLinks } from '@/_lib/site';

type Props = {
    dict: Dictionary['contact'];
};

const Contact: React.FunctionComponent<Props> = ({ dict }) => {
    return (
        <section id='contact'>
            <div className='mx-auto max-w-[1160px] px-6 py-20 md:py-26'>
                <div className='flex flex-wrap items-center justify-between gap-10 rounded-[28px] border border-cta-line bg-cta p-[clamp(32px,6vw,80px)]'>
                    <div className='min-w-0 flex-[1_1_420px]'>
                        <h2 className='mb-4 font-title text-[clamp(30px,3.6vw,48px)] leading-[1.02] font-extrabold tracking-[-0.035em] text-white'>
                            {dict.title}
                        </h2>
                        <p className='text-lg text-[#c9d4ea]'>{dict.intro}</p>
                    </div>
                    <div className='flex flex-col items-start gap-4'>
                        <a
                            href={`mailto:${contactEmail}`}
                            className='rounded-full bg-accent px-7 py-4 text-lg font-bold break-all text-[#092c63] transition-opacity hover:opacity-90'>
                            {contactEmail}
                        </a>
                        <div className='flex gap-5 text-[15px] text-[#c9d4ea]'>
                            <a href={socialLinks.linkedIn} className='underline-offset-4 hover:underline'>
                                LinkedIn
                            </a>
                            <a href={socialLinks.gitHub} className='underline-offset-4 hover:underline'>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
