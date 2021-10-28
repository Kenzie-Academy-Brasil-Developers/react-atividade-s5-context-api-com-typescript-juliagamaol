
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
   
    body{
        background:#DADFF7;
        color: #000;
        text-align: center;

    }
    body, input, button{
        font-family: 'PT Serif', serif;
    }
    h1,h2,h3,h4,h5,h6, span{
        font-family: 'Roboto Mono', monospace;
        font-weight: 800;
        
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;