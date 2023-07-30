import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';

import PopulerMenu from '../PopularMenu/PopulerMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Resturante | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopulerMenu />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
