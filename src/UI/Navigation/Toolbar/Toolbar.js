import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Toolbar.css";

const toolbar = ({numOfItems, isAuth, drawerToggleClicked}) => (
  <header className="toolbar">
    <div className="toolbar__top">
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className="toolbar__topLogo">
        <Logo />
      </div>

      <div className="toolbar__Search toolbar__desktopOnly">
        <input type="text" className="toolbar__topSearchInput" />
        <SearchIcon className="toolbar__topSearchIcon" />
      </div>

      <nav className="toolbar__desktopOnly">
        <NavigationItems isAuthenticated={isAuth} />
      </nav>

      <Link to="/cart" className="toolbar__topBasket">
        <span className="toolbar__topBasketCount">{numOfItems}</span>
        <ShoppingBasketIcon />
      </Link>
    </div>
    <div className="toolbar__bottom toolbar__phoneOnly">
      <div className="toolbar__Search">
        <input type="text" className="toolbar__topSearchInput" />
        <SearchIcon className="toolbar__topSearchIcon" />
      </div>
    </div>
  </header>
);

const mapStatetoProps = state => {
  return {
      numOfItems: state.cart.numOfItems,
  }
};

export default connect(mapStatetoProps)(toolbar);
