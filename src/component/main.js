import { View } from "react-native";
import { styles } from "./../../style";
import { useEffect, useState } from "react";
import ButtonSubmit from "./button";
import TodoTitle from "./Title";
import Inputs from "./Inputs";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slice";

export default function Main() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const todoList = useSelector((state) => state.todosList.todos);
  const dispatch = useDispatch();
  const save = () => {
    if (title) {
      dispatch(addTodo({ title, description, isDone: false }));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <TodoTitle />
      <Inputs
        title={title}
        onChangeTitle={(val) => setTitle(val)}
        description={description}
        onChangeDes={(val) => setDescription(val)}
      />

      <ButtonSubmit onclick={save} />
    </View>
  );
}
