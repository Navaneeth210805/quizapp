import React from 'react';

const RippleBackground = () => {
  return (
    <div className='inset-0 flex justify-center items-center'>
      <div className='ripple3 bg-slate-800 lg:h-40 lg:w-40 h-20 w-20 rounded-full absolute'></div>
      <div className='ripple4 bg-slate-800 lg:h-40 lg:w-40 h-20 w-20 rounded-full absolute'></div>
      <div className='ripple5 bg-slate-800 lg:h-40 lg:w-40 h-20 w-20 rounded-full absolute'></div>
    </div>
  );
};

export default RippleBackground;
