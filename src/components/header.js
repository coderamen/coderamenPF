import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const StyledSideBar = styled.div`
    @media (min-width: 1440px) {
      width: 240px;
    }
    @media screen and (min-width: 1440px) {
      padding-top: 32px;
      padding-left: 32px;
      padding-right: 32px;
    }
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
      margin: 0.8vh 0;
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
    <div className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Portfolio</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </div>
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
