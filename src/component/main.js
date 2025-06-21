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
    if (title) {
      setTODos([
        ...JSON.parse(jsonValue),
        { Title: title, Descrition: descrition },
      ]);
    }
    setTitle("");
    setDescrition("");
  };

  return (
    <View style={[styles.container, { paddingTop: 48 }]}>
      <TodoTitle />
      <Inputs
        title={title}
        onChangeTitle={(val) => setTitle(val)}
        descrition={descrition}
        onChangeDes={(val) => setDescrition(val)}
      />

      <ButtonSubmit onclick={save} />

      <View style={styles.dividerLine} />

      <ShowButton />
      <TodoList heigh={450} />
    </View>
  );
}
