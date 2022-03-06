
import ReactDOM from 'react-dom';
import App from './app';
import {createGlobalStyle} from 'styled-components';
import { Fonts } from './utils/constants/style.constant';

const GlobalStyles = createGlobalStyle`
    *{
      box-sizing: inherit;
    }

    html {
      font-size: 49.5%;
    }

    body {
        margin: 0;
        font-family: ${Fonts.secoundery};
        box-sizing: border-box;
    }
`;

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);