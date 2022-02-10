import React from 'react';
import { Header } from '../../Layout/Header/Header';
import { Footer } from '../../Layout/Footer/Footer'
import { Main } from '../../Layout/Main/Main';
import '../Home/Home.css'

export const Home = () => {
  return <div id='Back'>
      <Header/>
      <Main/>
      <Footer/>
  </div>;
};
