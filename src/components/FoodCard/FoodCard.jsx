import React from 'react';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src={image} alt='Item Food' />
        </figure>
        <p className='bg-black text-white absolute right-0 mr-8 mt-4 px-4'>
          ${price}
        </p>
        <div className='card-body'>
          <h2 className='card-title'>{name}</h2>
          <p>{recipe}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
