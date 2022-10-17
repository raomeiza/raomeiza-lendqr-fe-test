import React from 'react';
import Home from './components/home';
import theme from './components/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './App.scss';

function App() {
  return (
      
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme={true} />
      <Home />
    </ThemeProvider>
  );
}

export default App;
