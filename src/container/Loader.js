import React from 'react';
import Loading from '../img/loading.gif'
 

const Loader = () => {
  return (
    <div className='loding'>
      <img src={Loading} alt="loding" />
    </div>
  );
}

export default Loader;
