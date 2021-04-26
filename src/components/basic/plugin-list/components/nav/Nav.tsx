import React from "react";
import { NavWrapper } from "./Nav.style";
import inOne from "../../../../../assets/img/png/in-one.png";

const Nav: React.FC<any> = () => {
  return (
    <NavWrapper>
      <h1 className="title"><img src={inOne} /></h1>
      <div className="search">Search</div>
    </NavWrapper>
  );
};

export default Nav;
