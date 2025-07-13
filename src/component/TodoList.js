import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../style";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { chageState, removeTodo } from "../redux/slice";

export default function TodoList({ navigation }) {
  const todoList = useSelector((state) => state.todosList.todos);
  const st = useSelector((state) => state.todosList.st);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        style={{ margin: 10 }}
        showsVerticalScrollIndicator={false}
        data={
          st == true
            ? todoList.filter((item) => item.isDone == true)
            : st == false
            ? todoList.filter((item) => item.isDone == false)
            : todoList
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
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
              dispatch(chageState(item.id));
            }}
          >
            <View style={{ flex: 8 }}>
              <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ color: "gray" }}>{item.description}</Text>
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
                  dispatch(removeTodo(item.id));
                }}
              />
              {!item.isDone ? (
                <MaterialIcons
                  name="done"
                  size={24}
                  color="black"
                  onPress={() => {
                    dispatch(chageState(item.id));
                  }}
                />
              ) : (
                <MaterialIcons
                  name="done-all"
                  size={24}
                  color="blue"
                  onPress={() => {
                    dispatch(chageState(item.id));
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
