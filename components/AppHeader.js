import *as React from 'react'
import {  View,Text,StyleSheet} from 'react-native'
export default class AppHeader extends React.Component{
  render(){
    return(
      <View style ={styles.textContainer }>
      <Text style ={ styles.text}>Quiz Buzzer App</Text>

      
      </View>
    )
  }
  
}
const styles=StyleSheet.create({
  textContainer:{
    backgroundColor:'violet'
  },
  text:{
    color:'black',padding:20,fontSize:20,fontWeight:"bold",textAlign:'center'
  } 
})
