import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.length === 0) {
      return;
    }
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };
  const handleDelete = (goalId) => {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => {
        return goal.id !== goalId;
      });
    });
  };
  const cancelAddGoal = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        isAddMode={isAddMode}
        cancelAddGoal={cancelAddGoal}
      />
      <GoalItem courseGoals={courseGoals} handleDelete={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
