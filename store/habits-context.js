import { createContext, useReducer } from 'react';

const dummy_habits = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05'),
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-01'),
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19'),
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05'),
    },
    {
        id: 'e7',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-01'),
    },
    {
        id: 'e8',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19'),
    },
    {
        id: 'e9',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18'),
    },
];


export const HabitsContext = createContext({
    Habits: [],
    //getAllHabits: () => [],
    addHabit: ({ description }) => {},
    deleteHabit: (id) => {},
    updateHabit: (id, { description, amount, date }) => {},
});


function habitsReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
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
        addHabit: addHabit,
        deleteHabit: deleteHabit,
        updateHabit: updateHabit,
    };

    return <HabitsContext.Provider value={value}>
              {children}
           </HabitsContext.Provider>;

}

export default HabitsContextProvider;