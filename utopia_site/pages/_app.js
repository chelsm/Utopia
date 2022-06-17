import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
html, body{
  margin: 0;
  padding: 0;
  overflow-y: hidden
}
* {
  box-sizing: border-box;
}
body{
  background-color: #C5A6D5;
  height: 100vh;
};
@font-face {
  font-family: "Utopia";
  src: url("/font/utopia.otf") format("opentype");
@font-face {
  font-family: "RobotoReg";
  src: url("/font/Roboto/Roboto-Regular.ttf") format("truetype");
`;

function MyApp({ Component, pageProps }) {
  return (
  <>
    <GlobalStyle/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
