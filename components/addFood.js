import * as React from "react";
import {View, StyleSheet,Text,Image} from "react-native";

export default class Food extends React.Component{
  render(){
    return(
      <View style ={styles.container}>
      <View style ={styles.header}>
      <Text style = {styles.headerText}>Add Food</Text>
      </View>
      <Image source={require("../assets/add.png")}
      style={styles.homeImg} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  }
  ,
  homeImg:{
  margin :"18%",
  marginTop:"40%",
  justifyContent:"center",
  width:250,
  height:300,
  resizeMode:"contain"
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
    marginLeft : 10
  },
})