//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const TextScreen = () => {
    const [currentText, setCurrentText] = useState("")
    const [password, setPassword] = useState("")
    const [passwordErr, setPasswordErr] = useState("Password must be longer than 5 characters")

    return (
        <View style={styles.container}>
            <Text>Enter name:</Text>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize='none'
                onChangeText={(value) => {
                    setCurrentText(value)
                }}
                value={currentText}
                autoCorrect={false}></TextInput>
            <Text>My name is :{currentText}</Text>

            <Text>Enter password:</Text>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(vale) => {
                    setPassword(vale)
                }} />
            {password.length < 5 ? <Text style={{ color: 'red' }}>{passwordErr}</Text> : null}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        width: '100%'
    }
});

//make this component available to the app
export default TextScreen;
