import React from 'react';

const Logo: React.FunctionComponent = () => {
    return (
        <span className='flex items-center gap-2.5'>
            <span aria-hidden='true' className='flex size-8 items-center justify-center rounded-lg bg-logo'>
                <span className='size-3 rounded-[3px] bg-accent' />
            </span>
            <span className='font-title text-[23px] font-extrabold tracking-[-0.03em] text-ink'>geekson</span>
        </span>
    );
};

export default Logo;
