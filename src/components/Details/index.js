import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import * as stateActions from "../../store/actions";
import CountiesList from "../CountiesList";

const Details = () => {
  const [sum, setSum] = useState(0);
  const [find, onChangeText] = useState("");
  const dispatch = useDispatch();
  const selectedState = useSelector((state) => state.appData.selectedState);

  const fetchData = async () => {
    const resp = await fetch(selectedState.detail);
    const { data } = await resp.json();
    const s = data.reduce((r, c) => r + c.population, 0);
    setSum(s);
    dispatch(stateActions.getCounties(data));
    dispatch(stateActions.loadingDetailsComplete());
  };

  useEffect(() => {
    if (selectedState) {
      dispatch(stateActions.loadingDetails());
      fetchData();
    }
  }, [selectedState]);

  const renderList = () => {
    if (selectedState) {
      return (
        <View>
          <CountiesList find={find} />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {selectedState && (
        <View>
          <TextInput style={styles.search} onChangeText={onChangeText} />
          <Text>Name: {selectedState.state}</Text>
          <Text>Population: {selectedState.population}</Text>
          <Text>Counties: {selectedState.counties}</Text>
          <Text>Sum population: {sum}</Text>
          <Text>
            {`Same sum and population: ${
              sum === selectedState.population ? "Yes" : "No"
            }`}
          </Text>
        </View>
      )}
      {renderList()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: Dimensions.get("window").height / 2,
    padding: 20,
  },
  search: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5,
  },
});

export default Details;
