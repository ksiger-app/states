import React, { useEffect } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import StateList from "../StateList";
import * as stateActions from "../../store/actions";
import { useDispatch } from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const resp = await fetch(
      "http://pos.idtretailsolutions.com/countytest/states"
    );
    const { data } = await resp.json();
    dispatch(stateActions.getStates(data));
    dispatch(stateActions.loadingStatesComplete());
  };

  useEffect(() => {
    dispatch(stateActions.loadingStates());
    fetchData();
  }, []);

  const onPress = (item) => {
    dispatch(stateActions.loadingDetails);
    dispatch(stateActions.selectState(item));
  };

  return (
    <View style={styles.container}>
      <StateList onPressItem={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: Dimensions.get("window").height / 2,
  },
});

export default List;
