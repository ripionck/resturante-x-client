import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import image from '../../../assets/image6.jpg';
import './featured.css';

const Featured = () => {
  return (
    <section className='featured-item bg-fixed text-white  mt-8 mb-12'>
      <SectionTitle heading='Featured Item' subHeading='Check It Out' />
      <div className='md:flex justify-center items-center pt-12 pb-20 px-36'>
        <div>
          <img src={image} alt='' />
        </div>
        <div className='md:ml-10'>
          <p>July 27, 2023</p>
          <p className='uppercase'>Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            tempora, reprehenderit sequi rerum voluptate cum omnis sint aut quam
            tempore iure nesciunt itaque minus nam optio illum repellendus
            impedit? Nam dolorem animi ipsam laborum aut nisi adipisci! Nemo
            consectetur nobis, nam numquam consequatur quam saepe nostrum a
            recusandae ab doloribus?
          </p>
          <button className='btn btn-outline uppercase border-0 border-b-4 mt-4 text-white'>
            read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
