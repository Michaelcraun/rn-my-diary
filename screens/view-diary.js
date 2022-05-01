import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ViewDiaryModal = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.diary.title}</Text>
      <Text style={styles.date}>
        {new Date(route.params.diary.date).toDateString()}
      </Text>
      <Text style={styles.body}>{route.params.diary.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: { marginTop: 20 },
  container: {
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  date: {
    color: "gray",
    fontSize: 10,
    marginTop: 2,
  },
  title: { fontSize: 18 },
});
