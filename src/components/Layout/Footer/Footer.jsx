import React from 'react';
import './../Footer/Footer.css'

export const Footer = ({button_color , color }) => {
  return <div className= 'Banner_buttons'>
        <button className = "button_color" >GitHub</button>
        <button className = "button_color" >Whatsapp</button>
        <button className = "button_color" >Twitter</button>
  </div>;
};
