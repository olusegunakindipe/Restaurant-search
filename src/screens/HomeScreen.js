import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const [term, setTerm] = useState("Burger");
  const CategoryItems = [
    {
      name: "Burger",
      image: require("../assets/images/burger.png"),
    },
    {
      name: "Cake",
      image: require("../assets/images/cake.png"),
    },
    {
      name: "Pasta",
      image: require("../assets/images/pasta.png"),
    },
    {
      name: "Pizza",
      image: require("../assets/images/pizza.png"),
    },
    {
      name: "Steak",
      image: require("../assets/images/steak.png"),
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
    backgroundColor: "rgb(223,187,100)",
    flex: 1,
  },
});
