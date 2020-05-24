import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
const GoalInput = ({ addGoalHandler, isAddMode, cancelAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={isAddMode} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={() => {
                addGoalHandler(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
export default GoalInput;
