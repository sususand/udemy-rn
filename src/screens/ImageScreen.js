//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';
// create a component
const ImageScreen = () => {
    return (
        <View style={styles.container}>
            <ImageDetail
                title="Forest"
                imageSource={require('../../assets/forest.jpg')}
                imageScore={9} />
            <ImageDetail
                title="Beach"
                imageSource={require('../../assets/beach.jpg')}
                imageScore={7} />
            <ImageDetail
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
                imageScore={8} />
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
export default ImageScreen;
