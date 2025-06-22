import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TodoList({ navigation, status }) {
  const [toDos, setToDos] = useState([]);
  const displayedTOdoes = toDos.filter((item) => {
    if (status == "All") return true;
    else if (status == "Active") return item.isDone == false;
    else if (status == "Done") return item.isDone == true;
  });
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
    <View>
      <FlatList
        style={{ margin: 10 }}
        showsVerticalScrollIndicator={false}
        data={displayedTOdoes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              },
            ]}
            onPress={() => {
              navigation.navigate("DisplayTodo", { ...item });
            }}
            onLongPress={async () => {
              console.log(toDos);

              const list = toDos.map((val, ind) => {
                // console.log({ ...item, isDone: !item.isDone });
                return ind == index ? { ...val, isDone: !val.isDone } : val;
              });

              console.log(toDos);
              const jsonValue = JSON.stringify(list);
              await AsyncStorage.setItem("tasks", jsonValue);
              setToDos(list);
              console.log(toDos);
            }}
          >
            <View style={{ flex: 8 }}>
              <Text style={{ fontWeight: "bold" }}>{item.Title}</Text>
              <Text style={{ color: "gray" }}>{item.Descrition}</Text>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Entypo
                name="trash"
                size={24}
                color="red"
                onPress={() => {
                  store(index);
                }}
              />
              {!item.isDone ? (
                <MaterialIcons name="done" size={24} color="black" />
              ) : (
                <MaterialIcons name="done-all" size={24} color="blue" />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
