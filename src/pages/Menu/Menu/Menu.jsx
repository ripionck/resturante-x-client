import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/image3.jpg';

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === 'dessert');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const salad = menu.filter((item) => item.category === 'salad');
  const soup = menu.filter((item) => item.category === 'soup');
  const offered = menu.filter((item) => item.category === 'offered');
  return (
    <>
      <Helmet>
        <title>Resturante | Menu</title>
      </Helmet>
      <Cover img={menuImg} title='our menu' />

      {/* Main cover */}
      <SectionTitle heading="tiday's offer" subHeading="Don't Miss" />
      {/* Offered menu items */}
      <MenuCategory items={offered} />

      {/* Dessert menu items */}
      <MenuCategory items={dessert} title='dessert' img={menuImg} />
      {/* Pizza menu items */}
      <MenuCategory items={pizza} title='pizza' img={menuImg} />
      {/* Salad menu items*/}
      <MenuCategory items={salad} title='salad' img={menuImg} />
      {/* Soup menu items*/}
      <MenuCategory items={soup} title='soup' img={menuImg} />
    </>
  );
};

export default Menu;
