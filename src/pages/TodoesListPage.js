import React, { useState } from "react";
import TodoList from "../component/TodoList";
import { Text, View } from "react-native";
import ShowButton from "../component/showButton";

export default function TodoesListPage({ navigation }) {
  const [status, setStatus] = useState("All");
  const setAll = () => {
    // console.log("setState");
    setStatus("All");
  };
  const setActive = () => {
    setStatus("Active");
  };
  const setDone = () => {
    setStatus("Done");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingVertical: 16,
      }}
    >
      <ShowButton setAll={setAll} setActive={setActive} setDone={setDone} />

      <TodoList navigation={navigation} status={status} />
    </View>
  );
}
