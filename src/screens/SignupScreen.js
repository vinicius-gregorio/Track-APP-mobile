import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

import NavigationButton from '../components/NavigationButton';

const SignupScreen = ( { navigation }) => {
    return <>

    <Text style= {{fontSize:48, color:'#393e46'}}>signup Screen</Text>

    <NavigationButton title='Go to Sign In' onPress={() => navigation.navigate('Signin')}/>
    
    <NavigationButton title='Go to Track List' onPress={() => navigation.navigate('TrackList')}/>
  
   
    </>
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#00adb5",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 10,
        marginVertical: 10,
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",       
        alignSelf: "center",
       
      },
      text: {
        color:'#393e46',
      },
});

export default SignupScreen;