import * as React from 'react';
import { Button, View, Text } from 'react-native';
import HabitsOutput from "../components/HabitsOutput";
//import { useContext, useEffect } from 'react';
//import { HabitsContext } from '../store/habits-context'




function AllHabits({ navigation, habits }) {

    /* const habitsCtx = useContext(HabitsContext);
     const { completedHabits, markHabitAsCompleted } = useContext(HabitsContext);
     // Example function to mark a habit as completed
     const handleCompleteHabit = (habitId) => {
         markHabitAsCompleted(habitId);
     }; */


    return (
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
            <HabitsOutput fallbackText="No Habits Found" />
        </View>
    );
}

export default AllHabits;