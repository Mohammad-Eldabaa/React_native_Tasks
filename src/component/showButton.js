import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../style";

export default function ShowButton({ setAll, setActive, setDone }) {
  const [pressedItem, setPressedItem] = useState(0);

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={[
          styles.filterBtn,
          {
            color: pressedItem == 0 ? "green" : "green",
            backgroundColor: pressedItem != 0 ? "white" : "gray",
          },
        ]}
        activeOpacity={0.2}
        onPress={() => {
          setAll();
          setPressedItem(0);
        }}
      >
        <Text style={styles.filterText}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.filterBtn,
          {
            color: pressedItem == 1 ? "white" : "black",
            backgroundColor: pressedItem != 1 ? "white" : "gray",
          },
        ]}
        activeOpacity={0.2}
        onPress={() => {
          setActive();
          setPressedItem(1);
        }}
      >
        <Text style={styles.filterText}>Active</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.filterBtn,
          {
            color: pressedItem == 2 ? "white" : "black",
            backgroundColor: pressedItem != 2 ? "white" : "gray",
          },
        ]}
        activeOpacity={0.2}
        onPress={() => {
          setDone();
          setPressedItem(2);
        }}
      >
        <Text style={styles.filterText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
