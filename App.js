import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/drawerNav";

export default function App() {
  return (
    
        <NavigationContainer>
        <DrawerNavigator/>
        </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header:{
   backgroundColor: '#752092',
   width:"100%",
   height :90,
   justifyContent:"center",
  },
  headerText: {
    fontSize: 25,
    color: '#ffe3b3',
    fontWeight: 'bold',
  },
  
});
