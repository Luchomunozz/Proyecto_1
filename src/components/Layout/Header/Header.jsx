import React from 'react';
import './../Header/Header.css'
import { NavLink } from 'react-router-dom';
import { button_color } from '../../UI/button_color/button_color';
import { AboutUs } from '../../Pages/AboutUs/AboutUs';

export const Header = () => {
  return(
    <header>
      <div className='Banner_buttons'>
          <NavLink to='/'><button className = 'button_color'>Home</button></NavLink>
          <NavLink to='/AboutUs'><button className = 'button_color'>AboutUs</button></NavLink>
          <NavLink to='/Contact'><button className = 'button_color'>Contact</button></NavLink> 
      </div>
      <div>
        </div>  
    </header>
  );

}



