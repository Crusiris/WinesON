import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './config/themeConfig';
import Navbar from './components/layout/header/Navbar';
import Wines from './components/wines/Wines';
import CarsShopping from './components/carshopping/CarsShopping';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Router>
         <Switch>
            <Route exact path="/" component={Wines}/>
            <Route exact path="/carrito" component={CarsShopping}/>
         </Switch>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
