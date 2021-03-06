import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Menu from '../components/menu'

import './index.scss'

const Layout = ({ children, data }) => (
  <div>
<Header siteTitle={data.site.siteMetadata.title} />
  <div className="container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'This is a sample website for the Gatsby Crash Course' },
        { name: 'keywords', content: 'gatsby, react, brayn, brigoli, tutorial' },
      ]}
    />
    <Menu/>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
 
  </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
