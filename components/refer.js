import * as React from "react";
import {View, StyleSheet,Text,Image} from "react-native";

export default class Refer extends React.Component{
  render(){
    return(
      <View style ={styles.container}>
      <View style ={styles.header}>
      <Text style = {styles.headerText}>Refer and Earn</Text>
      </View>
      <Image source={require("../assets/refer.png")}
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
  margin :"10%",
  justifyContent:"center",
  marginTop:"40%",
  width:320,
  height:320,
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