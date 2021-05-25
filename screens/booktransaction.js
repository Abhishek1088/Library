import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import * as Permissions from 'expo-permissions';
    import { BarCodeScanner } from 'expo-barcode-scanner';
export default class Booktransaction extends React.Component{
    
 constructor(){
     super()
     this.state={hascamerapermissionc:null,scanned:false,scanneddata:"",buttonstate:"normal"}
 }
    render(){

        return(<View style={styles.cantainer}><Text style={styles.displayText}>Booktransaction</Text>
        <TouchableOpacity style={styles.scanButton}>
            <Text style={styles.buttonText}>Scan QR code</Text>
        </TouchableOpacity>
        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
    }
  });