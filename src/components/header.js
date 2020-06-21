import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const StyledSideBar = styled.div`
    @media screen and (min-width: 1440px) {
      padding-top: 32px;
      padding-left: 32px;
      padding-right: 32px;
    }
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    background-color: #827397;
    padding-top: 20px;
    .menu {
      display: flex;
      flex-direction: column;
      flex: 0 0 42%;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      margin: 0 50px;
    }
    a {
      font-size: 16px;
      letter-spacing: 0.08em;
      color: rgb(80, 80, 80);
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;
    }
`


const Header = ({ siteTitle }) => (
  <StyledSideBar>
    <div style={{ flex: `0 0 25%` }} /> 
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    
    <div style={{ flex: `0 0 25%` }} />
  </StyledSideBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
