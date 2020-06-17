import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './config/themeConfig';
import Wines from './components/wines/Wines';
import CarsShopping from './components/carshopping/CarsShopping';
import WinesState from './context/wines/winesState';

function App() {
  console.log(process.env.REACT_APP_URL_PRODUCT)
  return (
    <ThemeProvider theme={theme}>
      <WinesState>
          <Router>
            <Switch>
                <Route exact path="/" component={Wines}/>
                <Route exact path="/carrito" component={CarsShopping}/>
            </Switch>
          </Router>
        </WinesState>
    </ThemeProvider>
    
  );
}

export default App;
