import { View } from "react-native";
import { styles } from "./../../style";
import { useEffect, useState } from "react";
import ButtonSubmit from "./button";
import ShowButton from "./showButton";
import TodoList from "./TodoList";
import TodoTitle from "./Title";
import Inputs from "./Inputs";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Main() {
  const [title, setTitle] = useState("");
  const [descrition, setDescrition] = useState("");
  const [toDos, setTODos] = useState([]);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tasks");
      setTODos(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.error("Error loading tasks:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const jsonValue = JSON.stringify(toDos);
        await AsyncStorage.setItem("tasks", jsonValue);
      } catch (e) {
        console.error("Error saving tasks:", e);
      }
    })();
  }, [toDos]);

  const save = async () => {
    const jsonValue = await AsyncStorage.getItem("tasks");
    let data = JSON.parse(jsonValue);
    if (data.length == 0 && toDos.length == 0) {
      console.log("is equal 0");
      data = [
        {
          Title: "Note",
          Descrition: "you can use long press to make the note completed",
          isDone: false,
        },
      ];
    }
    // console.log(toDos.length);
    if (title) {
      setTODos([
        ...data,
        { Title: title, Descrition: descrition, isDone: false },
      ]);
    }
    setTitle("");
    setDescrition("");
  };

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <TodoTitle />
      <Inputs
        title={title}
        onChangeTitle={(val) => setTitle(val)}
        descrition={descrition}
        onChangeDes={(val) => setDescrition(val)}
      />

      <ButtonSubmit onclick={save} />
    </View>
  );
}
