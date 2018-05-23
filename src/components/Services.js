import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Button} from 'react-native';
import {Icon, Footer, FooterTab, Right} from 'native-base';

class Services extends Component {

   state = {
      names: [
         {
            id: 0,
            name: 'Electrician',
         },
         {
            id: 1,
            name: 'Plumber',
         },
         {
            id: 2,
            name: 'Water Damage',
         },
         {
            id: 3,
            name: 'Pest Control',
         }
      ]
   }
   // alertItemName = (item) => {
   //    alert('You are adding ' + item.name + ' to your services.')
   // }

alertItemName = (item) => {
alert(
  'Add ' + item.name + ' to your profile?' ,
  'My Alert Msg',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: true }
)
}

   render() {
      return (

         <View style={styles.view}> 
          <StatusBar hidden={true} />
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <View style={{flexDirection: 'row'}}>
                       <Text style = {styles.text}>
                        {item.name}          
                       </Text>
                       <Right>
                       <Icon name="add" style = {styles.icon}/>  
                       </Right>
                     </View>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}

const styles = StyleSheet.create ({
  view:{
    marginTop:50
  },
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d0ece7',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c',
      fontSize: 16,
      flexDirection: 'row', 
      paddingTop:6
   },
   icon: {
    marginLeft:20,
    fontSize:24
   }
})

export default Services;

