//import liraries
import React, { Component, useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { ...state, counter: state.counter + action.payload }
        case 'decrease':
            return { ...state, counter: state.counter - action.payload }
        default:
            return state;
    }
}
// create a component
const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    const { counter } = state;
    return (
        <View style={styles.container}>
            <Text>Current count :{counter}</Text>
            <Button
                title='Increase'
                onPress={() => {
                    dispatch({ type: 'increase', payload: 1 })
                }}></Button>

            <Button
                title='Decrease'
                onPress={() => {
                    dispatch({ type: 'decrease', payload: 1 })
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
export default CounterWithReducer;
