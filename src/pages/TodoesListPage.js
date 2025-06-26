import React, { useState } from "react";
import TodoList from "../component/TodoList";
import { Text, View } from "react-native";
import ShowButton from "../component/showButton";

export default function TodoesListPage({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingVertical: 16,
      }}
    >
      <ShowButton />

      <TodoList navigation={navigation} />
    </View>
  );
}
