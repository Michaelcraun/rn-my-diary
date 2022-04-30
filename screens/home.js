import React from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "../components/action-button";
import DiaryList from "../components/diary-list";

export class Home extends React.Component {
  onAddPressed = () => {
    console.log("onAddPressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <DiaryList />
        <ActionButton title="Add New Diary" onPress={this.onAddPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "#e0b5e8",
  },
});
