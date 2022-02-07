import React from 'react';


export const Header = ({button_color , color }) => {
  return(
    <header>
      <div>
          <button className = "button_color" >Home</button>
          <button className = "button_color" >About us</button>
          <button className = "button_color" >Contact</button>
      </div>
      <div>
        </div>  
    </header>
  );

}



