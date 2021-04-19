import React from "react";
import { NavWrapper } from "./Nav.style";

const Nav: React.FC<any> = () => {
  return (
    <NavWrapper>
      <h1 className="title">In-One</h1>
      <div className="search">Search</div>
    </NavWrapper>
  );
};

export default Nav;
