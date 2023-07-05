import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      onPress={() => navigation.navigate("Components")}
      title="Go to component demo"></Button>
    <TouchableOpacity
      onPress={() => navigation.navigate("ListScreen")}>
      <Text>Go to list demo</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => navigation.navigate("ImageScreen")}>
      <Text>Go to image screen</Text>
    </TouchableOpacity>

  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
