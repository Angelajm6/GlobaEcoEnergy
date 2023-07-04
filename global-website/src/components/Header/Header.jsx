import React from 'react';
import WaterImg from '../../assets/Water.jpeg';
import '../Header/Header.css';


const Header = () => {
  return (
    <nav className='app_header'>
        <div>
            <h1 className='global'> GLOBAL ECO-ENERGY</h1> 
            <h2 className='global_2'>Just go with the FLOW</h2>
        </div>
        <div className='header_img'>
            <img src={WaterImg} alt='water drop header' />        
        </div>
    </nav>

  )
}

export default Header;