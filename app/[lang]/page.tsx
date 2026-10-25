import { notFound } from 'next/navigation';

import { availableLocales, getDictionary, hasLocale } from '@/_lib/i18n';
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

    return (
        <>
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
