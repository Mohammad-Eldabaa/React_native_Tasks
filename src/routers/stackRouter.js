import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TodoesListPage from "../pages/TodoesListPage";
import DisplayTodo from "../pages/DisplayTodo";

export default function StackRouterNav() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Todo list" component={TodoesListPage} />
      <Screen name="DisplayTodo" component={DisplayTodo} />
    </Navigator>
  );
}
