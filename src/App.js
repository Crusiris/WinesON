import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './config/themeConfig';
import Wines from './components/wines/Wines'

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Wines/>
    </ThemeProvider>
    
  );
}

export default App;
