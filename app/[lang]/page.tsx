import { notFound } from 'next/navigation';

import { availableLocales, getDictionary, hasLocale } from '@/_lib/i18n';
import { contactEmail, siteUrl, socialLinks } from '@/_lib/site';
import About from '@/_ui/about';
import Contact from '@/_ui/contact';
import Footer from '@/_ui/footer';
import Header from '@/_ui/header';
import Hero from '@/_ui/hero';
import Highlights from '@/_ui/highlights';
import Method from '@/_ui/method';
import Services from '@/_ui/services';
import Work from '@/_ui/work';

const Home = async ({ params }: PageProps<'/[lang]'>) => {
    const { lang } = await params;
    if (!hasLocale(lang)) notFound();

    const dict = await getDictionary(lang);

    // Lets search engines show the business details (location, languages, contact) alongside the result.
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Geekson Software',
        url: `${siteUrl}/${lang}/`,
        description: dict.meta.description,
        email: contactEmail,
        address: { '@type': 'PostalAddress', addressLocality: 'Meise', addressCountry: 'BE' },
        areaServed: 'BE',
        knowsLanguage: ['fr', 'nl', 'en'],
        founder: { '@type': 'Person', name: 'Olivier Sputael', jobTitle: 'Full-stack engineer' },
        sameAs: [socialLinks.linkedIn, socialLinks.gitHub],
    };

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
            />
            <Header dict={dict.nav} lang={lang} availableLocales={availableLocales} />
            <main>
                <Hero dict={dict.hero} />
                <Highlights items={dict.highlights} />
                <Services dict={dict.services} />
                <Work dict={dict.work} />
                <About dict={dict.about} />
                <Method dict={dict.method} />
                <Contact dict={dict.contact} />
            </main>
            <Footer dict={dict.footer} />
        </>
    );
};

export default Home;
