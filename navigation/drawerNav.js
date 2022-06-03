import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./tabNav"

import Profile from "../components/profile"
import Refer from "../components/refer"
import Subscription from "../components/subscription";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Subscription" component={Subscription} />
      <Drawer.Screen name="Refer" component={Refer}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
