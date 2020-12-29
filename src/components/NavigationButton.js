import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

const NavigationButton = ({ onPress, title }) => {
    // return <>
    // <TouchableOpacity onPress={onPress}  style={styles.appButtonContainer}>
    // <Text style={styles.appButtonText}>{title}</Text>
    // </TouchableOpacity>    
    // </>
    return <Button title={title}
     onPress = {onPress}
      buttonStyle={styles.appButtonContainer} 
      
      />;
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#333",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 10,
        
        
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",       
        alignSelf: "center",
       
      },
});

export default NavigationButton;