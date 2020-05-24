import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const GoalItem = ({ courseGoals, handleDelete }) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={courseGoals}
      renderItem={(itemData) => {
        return (
          <TouchableOpacity onPress={() => handleDelete(itemData.item.id)}>
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 12,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
