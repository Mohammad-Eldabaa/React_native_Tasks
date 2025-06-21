import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "../../style";

export default function Inputs({
  title,
  onChangeTitle,
  descrition,
  onChangeDes,
}) {
  return (
    <View style={{ width: "100%", marginHorizontal: 16 }}>
      <TextInput
        value={title}
        onChangeText={onChangeTitle}
        style={styles.input}
        placeholder="Title"
      ></TextInput>
      <TextInput
        value={descrition}
        onChangeText={onChangeDes}
        placeholder="Description"
        style={styles.input}
      ></TextInput>
    </View>
  );
}
