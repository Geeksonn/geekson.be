import React from 'react';

type Props = {
    items: string[];
};

const Highlights: React.FunctionComponent<Props> = ({ items }) => {
    return (
        <section className='border-y border-line'>
            <ul className='mx-auto flex max-w-[1160px] flex-wrap justify-between gap-x-8 gap-y-3 px-6 py-5.5 text-[15px] font-semibold text-ink'>
                {items.map((item) => (
                    <li key={item} className='flex items-center gap-2.5'>
                        <span aria-hidden='true' className='size-2 rounded-full bg-accent' />
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Highlights;
