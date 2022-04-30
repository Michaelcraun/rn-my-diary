import { StyleSheet } from "react-native";
import { useState } from "react";
import { Home } from "./screens/home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();
  const [diaries, setDiaries] = useState();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Diary" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0b5e8",
  },
});
