import Header from './header';
import Head from 'next/head';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Geekson Software</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
