import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './globalStyle'
import Header from './header'
import Footer from './footer'

const StyledLayout = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    .main-content {
        width: 100%;
        max-width: 52.5rem;
        margin: 0 auto;
        padding: 0 2.5rem;
    }
`


const Layout = ({ children }) => {
    console.log('check -->', children);
    return (
        <StyledLayout>
            <GlobalStyle />
            <Header />
            <div className="main-content">{ children }</div>
            <Footer />
        </StyledLayout>
    )
}

export default Layout