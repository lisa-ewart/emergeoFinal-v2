
//change button (service) to question with check boxes
//add new screen with services to select
//change select username to enter first name and last name
//remove mini bio and photo select from create profile 



import React, { Component } from 'react';
import { StyleSheet,
	    Text,
      	TextInput,
	    View,
	    TouchableOpacity,
	    ScrollView, 
      StatusBar,
      Image
	    } from 'react-native';
import { RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Container, Header, Content, Footer, FooterTab, Button, Icon} from 'native-base';
import RadioForm from 'react-native-radio-form';

const radioData = [
    {
        label: 'yes',
        value: '1'
    },
    {
        label: 'no',
        value: '0'
    }
];
 

class CreateProfile extends Component{
    render(){  
        return(
        	<Container style={styles.containerStyle} >
          <StatusBar hidden={true} />
        	<ScrollView>
        	<View style={styles.containerStyle}>
        	  <View>
	        	<Text style={styles.textStyle}>Profile Setup</Text>
	          </View>
            <View >
              <Image style={styles.logoSize} source={require('../../logo.png')} />
            </View>
	          <View style={styles.cardStyle}>
	          	<TextInput style={styles.inputStyle} placeholder="choose a username (required)"></TextInput>
	          	<TextInput  multiline={true} maxLength={150} style={styles.inputStyleBio} placeholder="minibio (max 150 chars)"></TextInput>
	          </View>

            <View>
	          <Text style={{color:'green', fontSize: 15, fontWeight:'bold', marginTop:20}}>Will You Offer a Service on Emergeo?</Text>
        	</View>

         
          <RadioForm
          style={{ width: 350 - 220 }}
              outerColor='green'
              innerColor='orange'
              dataSource={radioData}
              itemShowKey="label"
              itemRealKey="value"
              circleSize={16}
              initial={1}
              formHorizontal={true}
              labelHorizontal={true}
              onPress={(item) => this._onSelect(item)}
          />

          <View style={{alignItems:'center'}}>
          <Button style={styles.submitButton} onPress={()=> {
            alert('you pressed the next button');
          }}>
            <Text style={{color:'#fff'}}>Next</Text>
          </Button>
          </View>

      </View>
        	</ScrollView>

        	<Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="search" />
            </Button>
            {/*<Button active>*/}
            <Button>
              <Icon active name="mail" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
        	</Container>
     );   
    };
};




// start photo

// end photo
const styles = {
	containerStyle:{
		flex: 1,
		backgroundColor: '#d0ece7',
		alignItems: 'center',
    marginTop:50
	},
	scrollviewStyle:{
		flex:1,
		backgroundColor: '#d0ece7',

	},
	textStyle:{
		textAlign: 'center',
		fontSize: 20,
		color: 'green',
		marginTop: 15
	},
	textStyle2:{
		textAlign: 'center',
		fontSize: 14,
		color: '#5d6d7e',
		marginTop: 10,
		padding: 10
	},
	cardStyle: {
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		alignItems: 'center'
	},
	inputStyle: {
    padding:10,
    margin:10,
    textAlign: 'center',
    backgroundColor: 'white',
    width:250,
    borderRadius: 5,
    color: '#5d6d7e',
  },
  inputStyleBio: {
    padding:10,
    margin:10,
    textAlign: 'center',
    backgroundColor: 'white',
    width:250,
    height:120,
    borderRadius: 5,
    color: '#5d6d7e',
  },
 
  cameraButton: {
  	backgroundColor:'white',
  	padding: 10
  },
  serviceButton:{
  	backgroundColor: 'orange',
  	color: '#ffffff',
  	padding: 10,
  	borderRadius: 5,
  	marginTop:15
  },
  submitButton:{
    backgroundColor: 'orange',
    color: '#ffffff',
    padding: 5,
    borderRadius: 4,
    marginTop:15,
    height:35,
  },
  logoSize:{
    height:100,
    width:90
  }
}

export default CreateProfile;