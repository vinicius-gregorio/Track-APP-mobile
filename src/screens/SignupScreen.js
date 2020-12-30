import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import NavigationButton from '../components/NavigationButton';
import Spacer from '../components/Spacer';

const SignupScreen = ( { navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return <View style={styles.container}>
    <Spacer margin={10}>
    <Text style= {styles.text} h3>Signup for Tracker</Text>
    </Spacer>
    
   
    <Input label= 'E-mail'
     value={email}
     onChangeText={setEmail}
     autoCapitalize='none'
     autoCorrect={false}
     inputContainerStyle={styles.inputContainer}/>    
    

    <Input label= 'Password'
    value={password}
    onChangeText={setPassword}
    autoCapitalize='none'
    autoCorrect={false}
    secureTextEntry
    inputContainerStyle={styles.inputContainer}/>
    <Spacer margin={10}/> 

    <Button title= 'Sign up' 
    buttonStyle={styles.appButtonContainer}
     onPress={() => console.log('onpress')}/>   
  
   
    </View>
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
  
const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#333",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 10,
        
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",       
        alignSelf: "center",
       
      },
      text: {
        color:'#393e46',        
      },
      container: {
          flex: 1,
          justifyContent: 'center',
          marginBottom: 200,
      },
      inputContainer: {
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 25,
        paddingStart: 10,
      },
});

export default SignupScreen;