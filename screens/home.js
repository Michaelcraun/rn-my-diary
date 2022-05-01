import React from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ActionButton from "../components/action-button";
import DiaryRow from "../components/diary-row";
import { theme } from "../constants/theme";
import { Storage } from "../data/storage";

export class Home extends React.Component {
  state = {
    diaries: [],
    refreshing: false,
  };

  onAddPressed = () => {
    this.props.navigation.navigate("addDiary");
  };

  onCellSelected = (diary) => {
    this.props.navigation.navigate("viewDiary", { diary });
  };

  onRefresh = async () => {
    this.setState({ refreshing: true });

    let diaries = await Storage.getItem("diaries");
    if (diaries != undefined) {
      this.setState({ diaries });
    }

    this.setState({ refreshing: false });
  };

  rows = () => {
    let rows = [];
    for (let index = 0; index <= this.state.diaries.length; index++) {
      let diary = this.state.diaries[index];
      if (diary != undefined) {
        if (diary.title != undefined && diary.body != undefined) {
          rows.push(
            <DiaryRow
              diary={diary}
              key={diary.uuid}
              onPress={() => this.onCellSelected(diary)}
            />
          );
        }
      }
    }
    return rows;
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        >
          {this.state.diaries.length ? (
            this.rows()
          ) : (
            <View style={styles.nullTextContainer}>
              <Text style={styles.nullText} />
            </View>
          )}
        </ScrollView>
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
  nullText: { flex: 1, textAlign: "center", fontSize: 22, color: "lightgray" },
  nullTextContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  safeContainer: {
    flex: 1,
    backgroundColor: theme.primary_color,
  },
});
