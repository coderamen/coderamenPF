import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    height: 6.25rem;
    margin: 0 auto;
    background: black;
    color: white;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: +1px;
    font-weight: 700;
    .foot-content {
        width: 100%;
        max-width: 62.5rem;
        margin: 0 auto;
        padding: 0 2.5rem;
        padding-top: 1.8rem;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <p className='foot-content'>Footer</p>
        </StyledFooter>
    )
}

export default Footer;