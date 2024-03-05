import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ setShowSideBar }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Bookshelf</h1>
        </NavLink>
        <Bars
          onClick={() => {
            setShowSideBar(true);
          }}
        />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/my-books" activeStyle>
            My Books
          </NavLink>
          <NavLink to="/browse" activeStyle>
            Browse
          </NavLink>
          <NavLink to="/rate" activeStyle>
            Rate
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
