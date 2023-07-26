import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';

import PopulerMenu from '../PopularMenu/PopulerMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <PopulerMenu />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
