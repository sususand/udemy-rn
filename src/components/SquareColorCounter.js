//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const SquareColorCounter = ({ onIncrease, onDecrease, color }) => {
    return (
        <View style={styles.container}>
            <Text>{color}</Text>
            <Button
                title={`Increase ${color} `}
                onPress={() => onIncrease()} />
            <Button
                onPress={() => onDecrease()}
                title={`Decrease ${color}`} />
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
});

//make this component available to the app
export default SquareColorCounter;
