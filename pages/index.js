import Page from '../components/page';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Page id="Home" />
      <Page id="About" />
    </div>
  );
}

export default Home;