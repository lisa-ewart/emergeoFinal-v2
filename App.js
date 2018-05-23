
// #5d6d7e grey blue
// #34495e dark blue
// #d0ece7 aqua
// #abebc6 lime
// #82e0aa darker lime
// #186a3b evergreen



import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import {app, auth, database} from './src/firebase';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import {StackNavigator} from 'react-navigation';

// location imports
import {accessPosition, watchPosition} from './src/actions/location_actions';

import rootReducers from './src/reducers';


import StartScreen from './src/components/StartScreen';
import Chat from './src/components/Chat';
import CreateProfile from './src/components/CreateProfile';
import Services from './src/components/Services';
import MyProfile from './src/components/ProfileHome';

const Emergeo = StackNavigator({
  Home: {screen: StartScreen},
  Message: {screen: Chat}
});


class App extends Component {
  state = { loggedIn: null, currentUser: null}
componentWillMount(){
  app;

  auth.onAuthStateChanged(user=>{
    if(user){
      this.setState({loggedIn: true, currentUser: user.uid});
      this._requestLocation();
    };
  });

  

}


_requestLocation = async () =>{
  try{
    let status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      if(status === PermissionsAndroid.RESULTS.GRANTED){
        console.log('yoo')
      } else {
        console.log('ACESS DENIED')
      }
  } catch (err){
    console.warn(err)
  }
}

  render() {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const store = createStoreWithMiddleware(rootReducers);
    const {loggedIn, currentUser} = this.state;
    console.log(this.props)
    

    return (

      
      <Provider store={store}>
        <View style={styles.container}>
          <MyProfile screenProps={{loggedIn, currentUser}}/>
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;