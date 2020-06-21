import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './globalStyle'
import Header from './header'

const StyledLayout = styled.div`
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
    position: fixed;
    .main-content {
        max-width: 52.5rem;
        padding: 0 64px;
        margin-left: 300px;
    }
`


const Layout = ({ children }) => {
    return (
        <StyledLayout>
            <GlobalStyle />
            <Header />
            <div className="main-content">{ children }</div>
        </StyledLayout>
    )
}

export default Layout