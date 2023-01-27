import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { shadowProps } from "../common/styles";
import React, { useState } from "react";

export default function Search({ setTerm }) {
  const [input, setInput] = useState("");

  const handleInput = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };
  return (
    <View style={[styles.input, styles.shadowProps]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        style={styles.text}
        value={input}
        placeholder="Restaurants, food!"
        onChangeText={(value) => setInput(value)}
        onEndEditing={handleInput}
      />
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    marginVertical: 15,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 24,
    paddingLeft: 16,
  },
  shadowProps,
});
