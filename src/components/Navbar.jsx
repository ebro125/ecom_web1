import React from 'react';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faMale, faFemale, faFire,faUser, faHeart, faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
       <nav className="navbar">
         
          <div className='navbar-logo'>
             <h2>Shopco</h2>
          </div>
          
          <div className='navbar-center'>
            <ul className='navbar-links'>
                <li><a href='/'><FontAwesomeIcon icon ={faHome}/></a></li>
                <li><a href='/men'>Men</a></li>
                <li><a href='/women'>Women</a></li>
                <li><a href="/trending"><FontAwesomeIcon icon ={faFire}/>Trending</a></li>
            </ul>
          </div>

          <div className='navbar-search'>
                <input type='text' placeholder='Search for Products'></input>
                <button><FontAwesomeIcon icon ={faSearch}/></button>
          </div>

          <div className='navbar-right'>
            <a href="/profile"><FontAwesomeIcon icon ={faUser}/></a>
            <a href="/wishlist"><FontAwesomeIcon icon ={faHeart}/></a>
            <a href="/cart"><FontAwesomeIcon icon ={faShoppingCart}/></a>

          </div>
       </nav>
    </>
  )
}

export default Navbar