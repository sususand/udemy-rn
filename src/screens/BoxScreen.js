//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const BoxScreen = () => {
    return (
        <>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>BoxScreen</Text>
            </View>

            <Text style={{ marginTop: 30 }}>Align Items Stretch</Text>
            <View style={[styles.viewStyle, styles.ai_stretch]}>
                <Text style={styles.textStyle}>Child 1</Text>
                <Text style={styles.textStyle}>Child 2</Text>
                <Text style={styles.textStyle}>Child 3</Text>
            </View>

            <Text style={{ marginTop: 30 }}>Align Items flex start</Text>
            <View style={[styles.viewStyle, styles.ai_flex_start]}>
                <Text style={styles.textStyle}>Child 1</Text>
                <Text style={styles.textStyle}>Child 2</Text>
                <Text style={styles.textStyle}>Child 3</Text>
            </View>

            <Text style={{ marginTop: 30 }}>Align Items center</Text>
            <View style={[styles.viewStyle, styles.ai_center]}>
                <Text style={styles.textStyle}>Child 1</Text>
                <Text style={styles.textStyle}>Child 2</Text>
                <Text style={styles.textStyle}>Child 3</Text>
            </View>

            <Text style={{ marginTop: 30 }}>Align Items flex end</Text>
            <View style={[styles.viewStyle, styles.ai_flex_end]}>
                <Text style={styles.textStyle}>Child 1</Text>
                <Text style={styles.textStyle}>Child 2</Text>
                <Text style={styles.textStyle}>Child 3</Text>
            </View>

            <Text style={{ marginTop: 30 }}>Flex Direction Row</Text>
            <View style={[styles.viewStyle, styles.fd_row]}>
                <Text style={styles.textStyle}>Child 1</Text>
                <Text style={styles.textStyle}>Child 2</Text>
                <Text style={styles.textStyle}>Child 3</Text>
            </View>

            <Text style={{ marginTop: 30 }}>Flex Direction Column</Text>
            <View style={[styles.viewStyle, styles.fd_column]}>
                <Text style={styles.textStyle}>Child 1</Text>
                <Text style={styles.textStyle}>Child 2</Text>
                <Text style={styles.textStyle}>Child 3</Text>
            </View>

        </>
    );
};

// define your styles
const styles = StyleSheet.create({

    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',

    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',

    },
    ai_stretch: {
        alignItems: 'stretch'
    },
    ai_flex_start: {
        alignItems: 'flex-start'
    },
    ai_center: {
        alignItems: 'center'
    },
    ai_flex_end: {
        alignItems: 'flex-end'
    },
    fd_row: {
        flexDirection: 'row'
    },
    fd_column: {
        flexDirection: 'column'
    }
});

//make this component available to the app
export default BoxScreen;
