import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const CountieListItem = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const { county, population } = item;
  const onPressHandler = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[
        styles.item,
        { backgroundColor: selected ? "#DC7F7FFF" : "#eaeaea" },
      ]}
    >
      <Text style={styles.title}>{county}</Text>
      <Text style={styles.text}>Population: {population}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
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

export default CountieListItem;
