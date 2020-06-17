import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    .title {
        font-size: 32px;
        margin-bottom: 1rem;
    }
    .subtitle {
        margin-top: 0;
        font-size: 20px;
    }
    .highlighted {
        box-shadow: inset 0 -2.5rem 0 #cdf3e1;
    }
`

const Hero = () => {
    return (
        <StyledSection >
            <h1 className="title">
                Hello, Spencer here <span role="img" aria-label="emoji">👋</span><br />
            </h1>
            <h2 className="subtitle">
                I test, design and build
            </h2>
            <p>Test Analyst and Front End Developer.</p>
            <p>"Emoji" Petaling Jaya, Malaysia</p>    
        </StyledSection>
    )
}

export default Hero;