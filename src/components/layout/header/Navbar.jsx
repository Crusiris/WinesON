import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from './style';

const Navbar = () => {
const classes = useStyles();
    
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography className={classes.title} variant="h6" noWrap>
            WinesON
          </Typography>
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

          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AddShoppingCartIcon />
            </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  );
}
 
export default Navbar;