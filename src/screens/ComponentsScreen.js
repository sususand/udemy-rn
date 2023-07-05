//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ComponentsScreen = () => {
    const name = "Su Su Sandi";
    return (
        <View>
            <Text style={styles.textStyle}>Start react native!</Text>
            <Text style={styles.subHeaderStyle}>Hello {name}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

//make this component available to the app
export default ComponentsScreen;
