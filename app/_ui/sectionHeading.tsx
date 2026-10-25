import React from 'react';

type Props = {
    eyebrow: string;
    title: string;
    className?: string;
};

const SectionHeading: React.FunctionComponent<Props> = ({ eyebrow, title, className = '' }) => {
    return (
        <div className={className}>
            <p className='mb-3 text-[13px] font-bold tracking-[0.14em] text-teal uppercase'>{eyebrow}</p>
            <h2 className='font-title text-[clamp(30px,3.6vw,44px)] leading-[1.05] font-extrabold tracking-[-0.035em] text-ink'>
                {title}
            </h2>
        </div>
    );
};

export default SectionHeading;
