import Header from './header';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Geekson Software</title>
            </Head>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
