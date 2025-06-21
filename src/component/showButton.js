import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../style";

export default function ShowButton() {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity style={styles.filterBtn} activeOpacity={0.2}>
        <Text style={styles.filterText}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterBtn} activeOpacity={0.2}>
        <Text style={styles.filterText}>Active</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterBtn} activeOpacity={0.2}>
        <Text style={styles.filterText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
