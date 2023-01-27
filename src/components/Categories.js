import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

export default function Categories({ categories, setTerm, term }) {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => (
          <CategoryItem
            name={item.name}
            imageUrl={item.image}
            index={index}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
