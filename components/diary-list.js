import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Storage } from "../data/storage";
import DiaryRow from "./diary-row";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const DiaryList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [diaries, setDiaries] = useState([]);

  const rows = () => {
    let rows = [];
    for (let index = 0; index <= diaries.length; index++) {
      let diary = diaries[index];
      if (diary != undefined) {
        if (diary.title != undefined && diary.body != undefined) {
          rows.push(
            <DiaryRow
              title={diary.title}
              subtitle={new Date(diary.date).toDateString()}
              key={diary.uuid}
            />
          );
        }
      }
    }
    return rows;
  };

  const onRefresh = async () => {
    setRefreshing(true);

    let diaries = await Storage.getItem("diaries");
    if (diaries != undefined) {
      setDiaries(diaries);
    }

    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {diaries.length == 0 ? (
          <View style={styles.nullTextContainer}>
            <Text style={styles.nullText} />
          </View>
        ) : (
          rows()
        )}
      </ScrollView>
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
