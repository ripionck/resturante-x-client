export const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className='flex space-x-2'>
      <img
        style={{ borderRadius: '0 200px 200px 200px' }}
        className='w-[120px]'
        src={image}
        alt='Item'
      />
      <div>
        <p className='uppercase'>{name} -------</p>
        <h3>{recipe}</h3>
      </div>
      <p className='text-yellow-500'>$ {price}</p>
    </div>
  );
};
