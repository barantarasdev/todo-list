import FONTS from 'src/styles/fonts'
import VARIABLES from 'src/styles/variables'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html, #root {
    height: 100%;
    width: 100%;
  }

  html {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: 500;
    overflow: hidden;
  }

  body {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  ul {
    list-style: none;
  }

  input {
    border: none;
    outline: none;
    background-color: transparent;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s,
      color 5000s ease-in-out 0s;
      -webkit-text-fill-color: inherit !important;
      background-color: inherit !important;
      color: inherit !important;
    }
  }

  input[type=checkbox] {
    cursor: pointer;
  }

  button {
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  select {
    outline: none;
    border: none;
  }

  .item-enter {
    opacity: 0;
  }

  .item-enter-active {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .item-exit {
    opacity: 1;
  }

  .item-exit-active {
    opacity: 0;
    transition: opacity var(--primary-duration) ease-in;
  }

  ${VARIABLES}
  ${FONTS}
`

export default GlobalStyle
