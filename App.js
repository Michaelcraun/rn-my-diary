import { StyleSheet } from "react-native";
import { Home } from "./screens/home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./constants/theme";
import { AddDiaryModal } from "./screens/add-diary";
import { ViewDiaryModal } from "./screens/view-diary";
const Stack = createStackNavigator();

export default function App() {
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
        <Stack.Screen
          name="addDiary"
          component={AddDiaryModal}
          options={{
            title: "Add Diary",
            headerStyle: {
              backgroundColor: theme.primary_color,
            },
            headerTitleStyle: {
              fontWeight: "300",
            },
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="viewDiary"
          component={ViewDiaryModal}
          options={{
            title: "View Diary",
            headerStyle: {
              backgroundColor: theme.primary_color,
            },
            headerTitleStyle: {
              fontWeight: "300",
            },
            presentation: "modal",
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
