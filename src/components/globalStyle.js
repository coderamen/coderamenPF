import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Fira+Sans&family=Rubik&display=swap")

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
        background-color: #363062;
        color: #eeeeee;
        font-size: 1.125rem;
        font-family: 'Rubik', sans-serif;
        line-height: 1.5rem;
        font-weight: 400;
    }
`

export default GlobalStyle