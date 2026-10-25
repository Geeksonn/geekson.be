import React from 'react';

import type { Dictionary } from '@/_lib/i18n';

type Props = {
    dict: Dictionary['footer'];
};

const Footer: React.FunctionComponent<Props> = ({ dict }) => {
    return (
        <footer className='border-t border-line'>
            <div className='mx-auto flex max-w-[1160px] flex-wrap justify-between gap-3 px-6 py-7 text-sm text-muted'>
                <span>© {new Date().getFullYear()} Geekson Software</span>
                <span>{dict.company}</span>
            </div>
        </footer>
    );
};

export default Footer;
