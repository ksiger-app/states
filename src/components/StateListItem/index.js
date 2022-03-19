import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const StateListItem = ({ item, onPress }) => {
  const { state, population, counties } = item;
  const onPressHandler = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.item}>
      <Text style={styles.title}>{state}</Text>
      <Text style={styles.text}>Population: {population}</Text>
      <Text style={styles.text}>Counties: {counties}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#eaeaea",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  text: {
    fontSize: 16,
  },
});

export default StateListItem;
