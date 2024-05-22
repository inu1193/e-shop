import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar= () =>{

    const [menu , setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef()
    const dropdown_toggle=(e)=>{
        menuRef.current.classList.toggle("nav-menu-visible")
        e.target.classList.toggle('open');
    }

    return (
    <div className='navbar'>
        <Link to='/' className='nav-logo'>
            <img className='nav-log-text' src={logo} alt='' />
            <p className='nav-logo-text'>E-Shop</p>
        </Link>
        <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><p><Link style={{textDecoration: 'none ',color:'black'}} to='/'><p style={{color:'black'}}>Shop</p></Link>{menu==="shop"?<hr />:<></>}</p></li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none '}} to='/mens'>Men</Link>{menu==="mens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none '}} to='/womens'>Women</Link>{menu==="womens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none '}} to='/kids'>Kids</Link>{menu==="kids"?<hr />:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/login')}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
                
                <Link to='/cart'><img className='nav-cart-img' src={cart_icon}  alt=''/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>)
}

export default Navbar;