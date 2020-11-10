import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

const navigationItems = ( props ) => (
    <ul className="navigationItems">
        <NavigationItem link="/" exact>Home</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">SigIn</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default navigationItems;