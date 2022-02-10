import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { Home } from './components/Pages/Home/Home';
import {AboutUs} from './components/Pages/AboutUs/AboutUs';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='AboutUs' element={<AboutUs/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
