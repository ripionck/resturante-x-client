import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
          heading={'Order Online'}
          subHeading={'From 10:00 AM to 11:00 PM'}
        />
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src={slide1} alt='' />
            <p className='text-3xl uppercase text-white text-center -mt-16'>
              slide
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt='' />
            <p className='text-3xl uppercase text-white text-center -mt-16'>
              slide
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt='' />
            <p className='text-3xl uppercase text-white text-center -mt-16'>
              slide
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt='' />
            <p className='text-3xl uppercase text-white text-center -mt-16'>
              slide
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt='' />
            <p className='text-3xl uppercase text-white text-center -mt-16'>
              slide
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt='' />
            <p className='text-3xl uppercase text-white text-center -mt-16'>
              slide
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt='' />
            <p className='text-3xl uppercase text-white text-center -mt-16'>
              slide
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt='' />
            <p className='text-3xl uppercase text-white text-center -mt-16'>
              slide
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt='' />
            <p className='text-3xl uppercase text-white text-center -mt-16'>
              slide
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
