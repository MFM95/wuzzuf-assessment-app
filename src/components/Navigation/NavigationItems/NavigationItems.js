import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/search">Search</NavigationItem> 
        <NavigationItem link="/history">History</NavigationItem> 
    </ul>
);

export default navigationItems;