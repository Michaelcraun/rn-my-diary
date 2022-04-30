import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const DiaryList = ({ diaries }) => {
  return (
    <View style={styles.container}>
      {diaries ? (
        <ScrollView></ScrollView>
      ) : (
        <View style={styles.nullTextContainer}>
          <Text style={styles.nullText}>No Diaries Yet</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  nullText: { flex: 1, textAlign: "center", fontSize: 22, color: "lightgray" },
  nullTextContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default DiaryList;
