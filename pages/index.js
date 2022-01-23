import Page from '../components/page';
import Navbar from '../components/navbar';
import HomeSection from '../components/homeSection';
import PageTitle from '../components/pageTitle';
import AboutSection from '../components/aboutSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Page id="Home">
        <HomeSection />
      </Page>
      <Page id="About" showTitle>
        <AboutSection />
      </Page>
      <Page id="Products" showTitle>
        <p>Content of about ...</p>
      </Page>
      <Page id="Services" showTitle>
        <p>Content of about ...</p>
      </Page>
      <Page id="Contact" showTitle>
        <p>Content of about ...</p>
      </Page>
    </div>
  );
}

export default Home;