import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
    --white:#fff;
    --greytext: #626262;
    --greytextmin: #c4c4c4;
    --greenButton: #31fc42d4;
    --greenHover: #19a425;

    }
    *{
        margin          : 0;
        padding         : 0;
        box-sizing      : border-box;
    }
    button {
        cursor          : pointer;
    }
    li,ul {
        list-style      : none;
    }
    a{
        text-decoration : none;
    }
    img{
        max-width       : 100%;
    }
    body{
        background-color: var(--white);
        height          : 100vh;
        width           : 100%;
        display         : flex;
        flex-direction  : column;
        align-items     : center;
        justify-content : center;
    }
`