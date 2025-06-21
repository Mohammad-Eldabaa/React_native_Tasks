import React from "react";
import { styles } from "../../style";
import { Pressable, Text } from "react-native";

export default function ButtonSubmit({ onclick }) {
  return (
    <Pressable style={styles.submitBtn} onPress={onclick}>
      <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
    </Pressable>
  );
}
