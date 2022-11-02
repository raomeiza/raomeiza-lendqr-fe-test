import React from 'react';
import Index from './components/router';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './App.scss';

function App() {
  return (
      
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme={true} />
      <Index />
    </ThemeProvider>
  );
}

export default App;
