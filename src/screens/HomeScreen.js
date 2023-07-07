import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      onPress={() => navigation.navigate("Components")}
      title="Go to component demo"
      style={styles.buttonStyle}></Button>
    <Button
      onPress={() => navigation.navigate("ListScreen")}
      title="Go to list demo"
      style={styles.buttonStyle}>
    </Button>

    <Button
      onPress={() => navigation.navigate("ImageScreen")}
      title="Go to image screen"
      style={styles.buttonStyle}>

    </Button>

    <Button
      onPress={() => navigation.navigate("CounterScreen")}
      title="Go to counter screen"
      style={styles.buttonStyle}>
    </Button>

    <Button
      onPress={() => navigation.navigate("ColorScreen")}
      title="Go to color screen"
      style={styles.buttonStyle}>

    </Button>

    <Button
      onPress={() => navigation.navigate("SquareScreen")}
      title="Go to square screen"
      style={styles.buttonStyle}>

    </Button>

    <Button
      onPress={() => navigation.navigate("CounterWithReducer")}
      title="Go to counter with reducer"
      style={styles.buttonStyle}>

    </Button>

    <Button
      onPress={() => navigation.navigate("TextScreen")}
      title="Go to text screen"
      style={styles.buttonStyle}>
    </Button>

    <Button
      onPress={() => navigation.navigate("BoxScreen")}
      title="Go to box screen"
      style={styles.buttonStyle}>
    </Button>

    <Button
      onPress={() => navigation.navigate("BoxExercise")}
      title="Go to box exercise"
      style={styles.buttonStyle}>

    </Button>

  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle: {
    marginTop: 5
  }
});

export default HomeScreen;
