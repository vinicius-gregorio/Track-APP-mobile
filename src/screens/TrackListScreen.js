import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import NavigationButton from '../components/NavigationButton';

const TrackListScreen = ({ navigation }) => {
    return <>
    <NavigationButton title='Go to Track Detail' onPress={() => navigation.navigate('TrackDetail')}/>
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
});

export default TrackListScreen;