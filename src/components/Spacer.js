import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children, margin }) => {
    return <View style={styles.spacer} >{children}</View>
}

const styles = StyleSheet.create({
    spacer: {
        margin,
    }
});

export default Spacer;