import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './globalStyle'
import Header from './header'
import Footer from './footer'

const StyledLayout = styled.div`
    @media (min-width: 1440px) {
        margin-left: 300px;
    }
    @media (min-width: 768px) {
        min-height: 100vh;
        padding-bottom: 120px;   
    }
    @media screen and (min-width: 1440px) {
        padding-left: 32px;
        padding-right: 32px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    .main-content {
        width: 100%;
        max-width: 52.5rem;
        padding: 0 64px;
    }
`


const Layout = ({ children }) => {
    console.log('check -->', children);
    return (
        <StyledLayout>
            <GlobalStyle />
            <Header />
            <div className="main-content">{ children }</div>
        </StyledLayout>
    )
}

export default Layout