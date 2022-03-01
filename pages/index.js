import Layout from '../components/layout';
import About from '../sections/about';
import Contact from '../sections/contact';
import Hero from '../sections/hero';
import Project from '../sections/project';
import Service from '../sections/service';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <About />
            {/*<Project />*/}
            <Service />
            <Contact />
        </Layout>
    );
};

export default Home;
