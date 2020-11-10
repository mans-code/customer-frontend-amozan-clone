import React, { Component } from "react";
import { connect } from "react-redux";
import Logo from "../../UI/Logo/Logo";
import Aux from "../Aux/Aux";
import Toolbar from "../../UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../UI/Navigation/SideDrawer/SideDrawer";

import "./Layout.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className="layout__content">{this.props.children}</main>
        <footer className="layout__footer">
          <Logo height={32} />
        </footer>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
