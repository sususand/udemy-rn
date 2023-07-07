//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const BoxExercise = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 400, backgroundColor: "purple" }}>
            <View style={styles.box1Style} />
            <View style={styles.box2Style} />
            <View style={styles.box3Style} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    box1Style: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    box2Style: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        backgroundColor: 'green'
    }, box3Style: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    }
});

//make this component available to the app
export default BoxExercise;
