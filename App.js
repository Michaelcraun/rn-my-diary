import { StyleSheet } from "react-native";
import { useState } from "react";
import { Home } from "./screens/home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./constants/theme";
const Stack = createStackNavigator();

export default function App() {
  const [diaries, setDiaries] = useState();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Diary",
            headerStyle: {
              backgroundColor: theme.primary_color,
            },
            headerTitleStyle: {
              fontWeight: "300",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary_color,
  },
});
