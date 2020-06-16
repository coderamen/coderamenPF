import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
    }
    .subtitle {
        margin-top: 0;
    }
    .highlighted {
        box-shadown: inset 0 -2.5rem 0 #cdf3e1;
    }
`

const Hero = () => {
    return (
        <StyledSection >
            <h1 className="title">
                test
            </h1>
        </StyledSection>
    )
}

export default Hero;