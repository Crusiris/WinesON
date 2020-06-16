import React from 'react';
import { Typography, Link } from '@material-ui/core';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://crusirisnunez.herokuapp.com">
                Crusiris Nuñez
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default Copyright;