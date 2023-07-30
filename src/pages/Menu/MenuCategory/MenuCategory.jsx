import React from 'react';
import { MenuItem } from '../../shared/MenuItem/MenuItem';
import Cover from '../../shared/Cover/Cover';
import { Link } from 'react-router-dom';

const menuCategory = ({ items, title, img }) => {
  return (
    <>
      <div className='pt-8'>
        {title && <Cover img={img} title={title} />}
        <div className='grid md:grid-cols-2 gap-10 mt-16'>
          {items.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <Link to={`/order/${title}`} className='flex justify-center mb-4'>
          <button className='btn btn-outline border-0 border-b-4 mt-4'>
            Order Your Favourite Food
          </button>
        </Link>
      </div>
    </>
  );
};

export default menuCategory;
