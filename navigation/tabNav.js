import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import Food from "../components/addFood"
import Dashboard from "../components/dashboard";
import Home from "../components/home"
import Menu from "../components/menu";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } 
          else if (route.name === "Dashboard") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          else if (route.name === "Food") {
            iconName = focused ? "pizza" : "pizza-outline";
          }
          else if (route.name === "Menu") {
            iconName = focused ? "map" : "map-outline";
            <ion-icon name="map-outline"></ion-icon>
          }
          return (
            <Ionicons
              name={iconName}
              size={20}
              color={color}
              style={styles.icons}
            />
          );
        },
      })}
      activeColor={"#FFE3B3"}
      inactiveColor={"#FFE3B3"}
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Dashboard" component={Dashboard}/>
      <Tab.Screen name="Food" component={Food}/>
      <Tab.Screen name="Menu" component={Menu}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#752092",
    height: "7%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
    margin:5
  }
});

export default BottomTabNavigator;
