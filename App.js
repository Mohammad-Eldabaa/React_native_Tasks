import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [descrition, setDescrition] = useState("");
  const [toDos, setTODos] = useState([]);
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={(val) => setTitle(val)}
        style={styles.input}
        placeholder="title"
      ></TextInput>
      <TextInput
        value={descrition}
        onChangeText={(val) => setDescrition(val)}
        placeholder="discription"
        style={styles.input}
      ></TextInput>

      <Pressable
        style={styles.submitBtn}
        onPress={() => {
          setTODos([...toDos, { Title: title, Descrition: descrition }]);
          setTitle("");
          setDescrition("");
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
      </Pressable>

      <View style={styles.dividerLine} />

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

      <View style={{ height: 300 }}>
        <FlatList
          style={{ margin: 10, width: 350 }}
          showsVerticalScrollIndicator={false}
          data={toDos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                borderColor: "green",
                borderWidth: 2,
                margin: "8",
                padding: "12",
                width: "90%",
              }}
            >
              <Text>{item.Title}</Text>
              <Text>{item.Descrition}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
