//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ViewBase } from 'react-native';

// create a component
const ListScreen = () => {
    const friends = [
        { name: "Friend #1" },
        { name: "Friend #2" },
        { name: "Friend #3" },
        { name: "Friend #4" },
        { name: "Friend #5" },
        { name: "Friend #6" },
        { name: "Friend #7" },
        { name: "Friend #8" },
        { name: "Friend #9" },
    ];
    const friends2 = [
        { name: "Friend #1", age: 20 },
        { name: "Friend #2", age: 21 },
        { name: "Friend #3", age: 22 },
        { name: "Friend #4", age: 23 },
        { name: "Friend #5", age: 24 },
        { name: "Friend #6", age: 25 },
        { name: "Friend #7", age: 26 },
        { name: "Friend #8", age: 27 },
        { name: "Friend #9", age: 28 },
    ]
    return (
        <View  >
            {/* <FlatList
                data={friends}
                renderItem={(element) => {
                    //element === {item:{name:"Friend #1"},index:0}
                }} /> */}

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}

                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item }) => {
                    //item === {name:"Friend #1"}
                    return <View>
                        <Text style={styles.textStyle}>{item.name}</Text>
                    </View>;
                }} />

            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={friend => friend.name}
                data={friends2}
                renderItem={({ item }) => {
                    return <View>
                        <Text style={styles.textStyle}>{item.name}-Age {item.age}</Text>
                    </View>;
                }} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
});

//make this component available to the app
export default ListScreen;

