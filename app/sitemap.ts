import type { MetadataRoute } from 'next';

import { availableLocales } from '@/_lib/i18n';
import { siteUrl } from '@/_lib/site';

export const dynamic = 'force-static';

const sitemap = (): MetadataRoute.Sitemap => {
    const languages = Object.fromEntries(availableLocales.map((locale) => [locale, `${siteUrl}/${locale}/`]));

    return availableLocales.map((locale) => ({
        url: `${siteUrl}/${locale}/`,
        lastModified: new Date(),
        alternates: { languages },
    }));
};

export default sitemap;
