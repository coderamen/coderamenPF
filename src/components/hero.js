import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false

const StyledSection = styled.section`



    .title {
        font-family: Rubik, Arial, sans-serif;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 0.32em;
        line-height: 1.6em;
    }
    .subtitle {
        font-family: 'Fira Sans', sans-serif;
        letter-spacing: -0.02em;
        line-height: 1.4em;
        word-spacing: -0.08em;
        font-size: 42px;
    }
    .highlighted {
        box-shadow: inset 0 -2.5rem 0 #cdf3e1;
    }
    .iconPad {
        padding-right: 8px;  
        
    }
    a:link:active, a:visited {
        color: white;
    }
`

const Hero = () => {
    return (
        <StyledSection >
            <h1 className="title">
                Hi, Spencer here <span role="img" aria-label="emoji">👋</span><br />
            </h1>
            <h2 className="subtitle">
                I'm a software tester/developer, music lover and gamer
            </h2>
            <p>Test Analyst and Front End Developer.</p>
            <p><span role="img" aria-label="emoji">📍</span>Petaling Jaya, Malaysia</p>
            <div>
                <a href="/">
                    <FontAwesomeIcon className="iconPad" icon={faLinkedin}/>     
                </a>
                <a href="/">
                    <FontAwesomeIcon className="iconPad" icon={faGithub}/>     
                </a>
                <a href="/">
                    <FontAwesomeIcon className="iconPad" icon={faInstagram}/>     
                </a>
                <a href="/">
                    <FontAwesomeIcon className="iconPad" icon={faTwitter}/>     
                </a>
            </div>
        </StyledSection>
    )
}

export default Hero;