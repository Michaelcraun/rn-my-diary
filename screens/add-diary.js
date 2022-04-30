import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import ActionButton from "../components/action-button";
import { Storage } from "../data/storage";
import { uuidv4 } from "../data/uuid";

export const AddDiaryModal = (navigation) => {
  const [body, setBody] = useState();
  const [title, setTitle] = useState();

  const presentAlert = (missing) => {
    Alert.alert("Error:", `Please supply a ${missing} for your diary entry!`, [
      {
        text: "OK",
      },
    ]);
  };

  const onAddPressed = async () => {
    if (title == undefined || title == "") {
      presentAlert("title");
      return;
    }

    if (body == undefined || body == "") {
      presentAlert("body");
      return;
    }

    const key = "diaries";
    const all_items = (await Storage.getItem(key)) || [];
    const diary = {
      body: body,
      date: new Date().getTime(),
      id: uuidv4(),
      title: title,
    };

    await Storage.setItem(key, [...all_items, diary]);
    navigation.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.field_container}>
          <Text style={styles.field_title}>Title</Text>
          <TextInput
            style={styles.title_input}
            placeholder="Example"
            onChangeText={setTitle}
            value={title}
          />
        </View>
        <View style={styles.field_container}>
          <Text style={styles.field_title}>Body</Text>
          <TextInput
            style={styles.body_input}
            placeholder="Example"
            onChangeText={setBody}
            value={body}
            multiline
          />
        </View>
      </View>

      <ActionButton title="Submit" onPress={onAddPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  body_input: {
    borderColor: "lightgray",
    borderRadius: 5,
    borderWidth: 1,
    maxHeight: 200,
    minHeight: 100,
    padding: 5,
  },
  container: { flex: 1 },
  field_container: {
    margin: 10,
  },
  field_title: {
    fontSize: 18,
    marginHorizontal: 5,
  },
  title_input: {
    borderColor: "lightgray",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },
});
