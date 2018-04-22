import React, { Component } from 'react';
import { StyleSheet,
        Text,
        Button,
        TextInput,
        View,
        TouchableHighlight, 
        TouchableOpacity,
	    } from 'react-native';
import {auth} from '../firebase';





class Auth extends Component{
  state = {
    email: "",
    password: ""
  }

  renderButton(){
  switch(this.props.loggedIn){
      case true:
        return(
          <TouchableOpacity onPress={()=>this._logOut()} style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>
                  Sign Out
                  </Text>
              </TouchableOpacity>
            )
      default:
        return(
        <TouchableOpacity onPress={()=>this.signInOrCreateUser()} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>
                Enter
                </Text>
        </TouchableOpacity>
      )
    }
  }

    render(){  
      const {email, password} = this.state;
      const {signInOrCreateUser} = this.props;
      console.log(this.props)
        return(
          <View style={styles.containerStyle}>

            <View>
              <TextInput placeholder="email" 
                          style={styles.inputStyle} 
                          onChangeText = {(email)=>this.setState({email})}
                          value={email}>
              </TextInput>
              <TextInput placeholder="password" 
                        style={styles.inputStyle}
                        onChangeText={(password) =>this.setState({password})} 
                        value={password}>
              </TextInput>
            </View>

            <View>
              {this.renderButton()}
            </View>

          </View>

     );   
  }


// Auth function to sign in with firebase

 signInOrCreateUser(){
  const {email, password} = this.state;

    auth.signInWithEmailAndPassword(email, password).then(()=>{
  const {navigate} = this.props.navigation;
           navigate ('Message');

    }).catch((e)=>{
        alert(e.message)
          auth.createUserWithEmailAndPassword(email, password).then(()=>{
                alert("USER CREATED")
                // navigate to next screen

          }).catch((e)=>{
            alert(e.code)
            alert(e.message)
          })
  
    })
  }
// end function

// LogOut function
_logOut() {
  navigator.geolocation.stopObserving();
  auth.signOut();

}
// end function

 

// onLoginSuccess(){
//   const {navigate} = this.props
//   // navigate to next screen
// }


}

const styles = {
  containerStyle:{
    
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle:{
    backgroundColor: '#00A95B',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'orange',
    marginLeft: 5,
    marginRight: 5,
    // color: '#fff',
    width: 100,
    marginTop:20
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  inputStyle: {
    padding:10,
    marginTop:10,
    textAlign: 'center',
    backgroundColor: 'white',
    width:250,
    borderRadius: 5,

  }
};




export default Auth;


