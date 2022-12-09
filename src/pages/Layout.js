import React from "react";
import {Outlet} from "react-router-dom";
import { NavBarItem } from "../components/NavBarItem";

const Layout = () => {
  return (
    <>
      <NavBarItem />
      <Outlet />
    </>
  );
};

export default Layout;