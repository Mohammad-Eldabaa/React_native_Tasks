import React from "react";
import { Text } from "react-native";

export default function TodoTitle() {
  return (
    <Text
      style={{
        color: "black",
        fontWeight: "bold",
        fontSize: 32,
        marginBottom: 16,
      }}
    >
      Todo App
    </Text>
  );
}
