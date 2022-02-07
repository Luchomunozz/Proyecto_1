import React from 'react';
import './../Header/Header.css'

export const Header = ({Banner_buttons, button_color }) => {
  return(
    <header>
      <div className='Banner_buttons'>
          <button className = "button_color" >Home</button>
          <button className = "button_color" >About us</button>
          <button className = "button_color" >Contact</button>
      </div>
      <div>
        </div>  
    </header>
  );

}



