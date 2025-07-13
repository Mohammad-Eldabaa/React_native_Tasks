import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DisplayTodo({ route }) {
  const [item] = useState(route.params);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "90%",
          padding: 16,
          paddingTop: 24,
          height: 360,
          borderRadius: 12,
          elevation: 8,
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "start",
    lineHeight: 22,
  },
});
