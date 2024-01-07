import * as React from 'react';
import { Button, View, Text } from 'react-native';
import HabitsOutput from "../components/HabitsOutput";


function AllHabits() {

    const dummy_habits = [
        {
            id: 'e1',
            text:'A pair of shoes',
        },
        {
            id: 'e2',
            text: 'A pair of trousers',
        },
        {
            id: 'e3',
            text: 'Some bananas',
        },
        {
            id: 'e4',
            text: 'A book',
        },
        {
            id: 'e5',
            text: 'Another book',
        }
    ];

    return (
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
            <HabitsOutput habits={dummy_habits} />
        </View>
    );
}

export default AllHabits;