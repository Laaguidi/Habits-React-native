import { createContext, useReducer, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HabitsContext = createContext({
    Habits: [],
    //Added
    getAllHabits: () => [],
    addHabit: ({ description }) => {},
    deleteHabit: (id) => {},
    updateHabit: (id, { description, amount, date }) => {},
});

function habitsReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];

        case 'completed':
            return state.map(habit =>
                habit.id === action.payload ? { ...habit, completed: true } : habit
            );

        case 'UPDATE':
            const updatableHabitIndex = state.findIndex(
                (habit) => habit.id === action.payload.id
            );
            const updatableHabit = state[updatableHabitIndex];
            const updatedItem = { ...updatableHabit, ...action.payload.data };
            const updatedHabits = [...state];
            updatedHabits[updatableHabitIndex] = updatedItem;
            return updatedHabits;
        case 'DELETE':
            return state.filter((habit) => habit.id !== action.payload);
        default:
            return state;
    }
}

function HabitsContextProvider({ children }) {
    const [habitsState, dispatch] = useReducer(habitsReducer, dummy_habits);
    //add:
    const [completedHabits, setCompletedHabits] = useState([]);

    //add:
    function habitsCompleted(habitId) {
        dispatch({ type: 'completed', payload: habitId });
        setCompletedHabits(prevCompletedHabits => [...prevCompletedHabits, habitId]);
        // You might also update your storage or context here
    }


    //Aded:
    async function getAllHabits() {
        try {
            const jsonHabits = await AsyncStorage.getItem('habits');
            return jsonHabits != null ? JSON.parse(jsonHabits) : [];
        } catch (error) {
            console.error('Error getting habits:', error);
            return [];
        }
    }

    function addHabit(habitData) {
        dispatch({ type: 'ADD', payload: habitData });
    }

    function deleteHabit(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateHabit(id, habitData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: habitData } });
    }

    const value = {
        habits: habitsState,
        //Add:
        //completedHabits: completedHabits,
        //habitsCompleted: habitsCompleted,
        getAllHabits: getAllHabits,
        addHabit: addHabit,
        deleteHabit: deleteHabit,
        updateHabit: updateHabit,
    };

    return <HabitsContext.Provider value={value}>
        {children}
    </HabitsContext.Provider>;
}

export default HabitsContextProvider;