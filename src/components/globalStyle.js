import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Fira+Sans")

    * {
        box-sizing: border-box;
    }
    html {
        width: 100%;
        heightL 100%;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: white;
        color: black;
        font-size: 1.125rem;
        font-family: 'Fira Sans', sans-serif;
        line-height: 1.5rem;
        font-weight: 400;
    }
`

export default GlobalStyle