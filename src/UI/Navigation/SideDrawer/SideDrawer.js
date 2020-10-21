import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

import "./SideDrawer.css";

const sideDrawer = (props) => {
  let attachedClasses = ["sideDrawer", "sideDrawer__close"];
  if (props.open) {
    attachedClasses = ["sideDrawer", "sideDrawer__open"];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className="sideDrawer__logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
