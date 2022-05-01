import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const DiaryRow = ({ diary, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{diary.title}</Text>
        <Text style={styles.subtitle}>
          {new Date(diary.date).toDateString()}
        </Text>
      </View>
      <Entypo name="chevron-small-right" size={24} color="gray" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    flexDirection: "row",
    padding: 10,
  },
  subtitle: {
    color: "gray",
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 3,
  },
  textContainer: { flex: 1 },
  title: { fontFamily: "Georgia", fontSize: 16, fontWeight: "500" },
});

export default DiaryRow;
