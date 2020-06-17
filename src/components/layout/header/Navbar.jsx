import React from 'react';
import { Link } from 'react-router-dom';
//Componentes de material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { grey } from '@material-ui/core/colors';
import useStyles from './style';

const Navbar = () => {
const classes = useStyles();
    
  return (
    
      <AppBar position="fixed">
        <Toolbar>
          <Link to={'/'} className={classes.title} variant="h6">
            <Typography >
              WinesON
            </Typography>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

                <Link to={'/carrito'}> 
                  <IconButton aria-label="add to shopping cart">
                      <AddShoppingCartIcon style={{ color: grey[50] }} />
                    </IconButton>
                </Link>

        </Toolbar>
      </AppBar>
     
  );
}
 
export default Navbar;