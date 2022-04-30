import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../constants/theme";

const ActionButton = ({ title, buttonStyle, onPress }) => {
  return (
    <View style={[styles.container, buttonStyle]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title ? title : "TEST"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: theme.primary_color,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "100",
  },
});

export default ActionButton;
