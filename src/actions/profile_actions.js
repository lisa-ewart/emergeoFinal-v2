import {database} from '../firebase';


// ActionCreator exports
export const GET_PROFILE = 'get_profile';


// Create profile 
export const createProfile(){
    const uid = this.props.screenProps.currentUser;
    database.ref('Users/' + uid).child('Profile').set({
        username,
        miniBio,

    })
}

// Get Profile from database
export const getProfile = () =>{
    return dispatch =>{
        database.ref('Users/'+ uid).child('Profile').once('value', data =>{
            dispatch({
                type: GET_PROFILE,
                payload: data.val()

            })
        })
    }
}

