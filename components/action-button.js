import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ActionButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title ? title : "TEST"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#e0b5e8",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ActionButton;
