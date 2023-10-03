import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import theme from './utils/theme';
import { StrictMode } from 'react';
import './assets/css/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </Router>
  </StrictMode>
);
