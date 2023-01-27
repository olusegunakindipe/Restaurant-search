import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
import Restaurants from "./src/components/Restaurants";
import Search from "./src/components/Search";

export default function App() {
  const [term, setTerm] = useState("Burger");
  const CategoryItems = [
    {
      name: "Burger",
      image: require("./src/assets/images/burger.png"),
    },
    {
      name: "Cake",
      image: require("./src/assets/images/cake.png"),
    },
    {
      name: "Pasta",
      image: require("./src/assets/images/pasta.png"),
    },
    {
      name: "Pizza",
      image: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Steak",
      image: require("./src/assets/images/steak.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories categories={CategoryItems} setTerm={setTerm} term={term} />
      <Restaurants term={term} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "rgb(105,125,85)",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
