import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "../../style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from "@expo/vector-icons/Entypo";

export default function TodoList({ heigh }) {
  const [toDos, setToDos] = useState([]);
  const getTodos = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tasks");
      setToDos(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.error("Error loading tasks:", e);
    }
  };

  useEffect(() => {
    getTodos();
  });

  const store = async (index) => {
    try {
      const list = toDos;
      list.splice(index, 1);
      const jsonValue = JSON.stringify(list);
      await AsyncStorage.setItem("tasks", jsonValue);
      // setToDos(toDos.splice(index, 1));
    } catch (e) {
      console.error("Error saving tasks:", e);
    }
  };
  return (
    <View style={{ height: heigh || "98%" }}>
      <FlatList
        style={{ margin: 10, width: 350 }}
        showsVerticalScrollIndicator={false}
        data={toDos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.itemContainer,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              },
            ]}
          >
            <View style={{ flex: 8 }}>
              <Text style={{ fontWeight: "bold" }}>{item.Title}</Text>
              <Text style={{ color: "gray" }}>{item.Descrition}</Text>
            </View>
            <View
              style={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
              <Entypo
                name="trash"
                size={24}
                color="red"
                onPress={() => {
                  store(index);
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
