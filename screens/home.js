import { StackActions } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "../components/action-button";
import DiaryList from "../components/diary-list";
import { theme } from "../constants/theme";

export class Home extends React.Component {
  onAddPressed = () => {
    this.props.navigation.navigate("addDiary");
  };

  render() {
    return (
      <View style={styles.container}>
        <DiaryList />
        <ActionButton
          title="Add New Diary"
          buttonStyle={styles.buttonAccent}
          onPress={this.onAddPressed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonAccent: {
    borderTopWidth: 1,
    borderTopColor: theme.secondary_color,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safeContainer: {
    flex: 1,
    backgroundColor: theme.primary_color,
  },
});
