import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Booktransaction from './screens/booktransaction'
import Searchscreen from './screens/searchscreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default function App() {
  return (
   <Appcontainer/>
  );
}

const Tabnavigator = createBottomTabNavigator({
  Transaction:{screen:Booktransaction},
  Search:{screen:Searchscreen}
    },
    {defaultNavigationOptions:({navigation})=>(
      {tabBarIcon:()=>{
        const routeName=navigation.state.routeName

        if(routeName=="Transaction"){ 
          console.log("hi")
          return(
            <Image source={require("./screens/book.png")} style={{width:40,height:40}}/>
          )
        }
        else if(routeName=="Search"){
          return(
            <Image source={require("./screens/searchingbook.png")} style={{width:40,height:40}}/>
          )
        }
      }}
)})
const Appcontainer = createAppContainer(Tabnavigator)
