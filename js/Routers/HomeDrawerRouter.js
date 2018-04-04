import React, { Component } from "react";
import HomePage from "../container/HomePage/index.js";
import SideBar from "../container/SideBar/index.js";
import blankPage from "../components/blankPage/index"
import { DrawerNavigator } from "react-navigation";

const HomeDrawerRouter = DrawerNavigator(
  {
    HomePage: { screen: HomePage },
    Home :{ screen : blankPage}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeDrawerRouter;
