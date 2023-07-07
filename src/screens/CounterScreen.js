//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const CounterScreen = () => {
    var [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text>Current count: {count}</Text>

            <Button title='Increase'
                onPress={() => {
                    setCount(count + 1);
                }}></Button>
            <Button title='Decrease'
                onPress={() => {
                    setCount(count - 1);
                }}></Button>
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
export default CounterScreen;
