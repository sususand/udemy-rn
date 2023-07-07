//import liraries
import React, { Component, useReducer, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SquareColorCounter from '../components/SquareColorCounter';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    //state ==={red:number,green:number,blue:number}
    //action === {type:'red'|'green'|'blue',payload:15}
    switch (action.type) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload }
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload }
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload }
        default:
            return state;
    }
}
// create a component
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state;
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // const setColor = (color, change) => {
    //     switch (color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //             break;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //             break;
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
    //             break;

    //         default:
    //             break;
    //     }
    // }
    return (
        <View style={styles.container}>
            <SquareColorCounter
                onIncrease={() => {
                    dispatch({ type: 'red', payload: COLOR_INCREMENT })
                }}
                onDecrease={() => {
                    dispatch({ type: 'red', payload: -1 * COLOR_INCREMENT })
                }}
                color="Red" />
            <SquareColorCounter
                onIncrease={() => {
                    dispatch({ type: "green", payload: COLOR_INCREMENT })
                }}
                onDecrease={() => {
                    dispatch({ type: "green", payload: -1 * COLOR_INCREMENT })
                }}
                color="Green" />
            <SquareColorCounter
                onIncrease={() => {
                    dispatch({ type: "blue", payload: COLOR_INCREMENT })
                }}
                onDecrease={() => {
                    dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT })
                }}
                color="Blue" />

            <View style={{ width: 200, height: 200, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
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
export default SquareScreen;
