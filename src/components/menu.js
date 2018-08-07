import React from 'react';
import Link from 'gatsby-link';

const Menu = () => {
  return (
    <div style={{background:"transparent",
    paddingTop:'10px'}}>
    <ul style={{
	listStyle: 'none',
	display: 'flex',
	justifyContent :'space-evenly'

    }}
        className="menu">
        <li><Link to="/" className="menu-link" activeClassName="link-active" exact>Home</Link></li>
    <li><Link to="/about" className="menu-link" activeClassName="link-active">About</Link></li>
    <li><Link to="/services" className="menu-link" activeClassName="link-active">Services</Link></li>
    <li><Link to="/blog" className="menu-link" activeClassName="link-active">Blog</Link></li>
        </ul>
    </div>
  )
}

export default Menu;