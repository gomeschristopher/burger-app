import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>X-Salada</NavigationItem>
        {
            props.isAuthenticated ? <NavigationItem link="/orders">Pedidos</NavigationItem> : null
        }
        { props.isAuthenticated
            ? <NavigationItem link="/logout">Logout</NavigationItem> 
            : <NavigationItem link="/auth">Login</NavigationItem>
        }
    </ul>
);

export default navigationItems;