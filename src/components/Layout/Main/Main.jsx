import React from 'react';
import image from './../../../Images/ImageMain.jpg'
import './../Main/Main.css'

export const Main = ({Image_color, ImageC}) => {
  return <div className='container_image'>
      <img src={image} alt="" className='image'/>
  </div>;
};
