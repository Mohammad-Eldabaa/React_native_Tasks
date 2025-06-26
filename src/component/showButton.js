import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../style";
import { useDispatch } from "react-redux";
import { setSt } from "../redux/slice";

export default function ShowButton() {
  const dispatch = useDispatch();
  const [pressedItem, setPressedItem] = useState(0);

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={[
          styles.filterBtn,
          {
            backgroundColor: pressedItem != 0 ? "white" : "gray",
          },
        ]}
        activeOpacity={0.2}
        onPress={() => {
          console.log("All");
          dispatch(setSt("All"));
          setPressedItem(0);
        }}
      >
        <Text style={styles.filterText}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.filterBtn,
          {
            backgroundColor: pressedItem != 1 ? "white" : "gray",
          },
        ]}
        activeOpacity={0.2}
        onPress={() => {
          dispatch(setSt(false));
          setPressedItem(1);
        }}
      >
        <Text style={styles.filterText}>Active</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.filterBtn,
          {
            backgroundColor: pressedItem != 2 ? "white" : "gray",
          },
        ]}
        activeOpacity={0.2}
        onPress={() => {
          dispatch(setSt(true));
          setPressedItem(2);
        }}
      >
        <Text style={styles.filterText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
