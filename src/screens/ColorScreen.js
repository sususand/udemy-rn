//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

// create a component
const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    const generateRandomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red},${green},${blue})`;
    }
    return (
        <View style={styles.container}>
            <Button title='Add a color' onPress={() => {
                setColors([...colors, generateRandomColor()])
            }} />
            {/* <View style={{ width: 100, height: 100, backgroundColor: generateRandomColor() }}></View> */}
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{ width: 100, height: 100, backgroundColor: item }}></View>;
                }}
            />
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
export default ColorScreen;
