import React from 'react'
import Link from 'gatsby-link'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'

const Header = ({ siteTitle }) => (
  <nav className="navbar is-transparent">
  <div className="navbar-container container">
  <div className="navbar-brand">

    <Link to="/" className="navbar-item logo">{ siteTitle }</Link>
  </div>

  <div id="navMenuColorsuccess-example">
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <img src={ facebook } alt="facebook"/>
          </p>
          <p className="control">
            <img src={ instagram } alt="instagram"/>
          </p>
            <p className="control">
            <img src={ linkedin } alt="linkedin"/>
          </p>
                 <p className="control">
            <img src={ twitter } alt="twitter"/>
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
)

export default Header
