import * as React from 'react';
import { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import HabitsOutput from "../components/HabitsOutput";
import { HabitsContext } from '../store/habits-context';


function AllHabits() {
    const habitsCtx = useContext(HabitsContext);

    return (
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
            <HabitsOutput habits={habitsCtx.habits} fallbackText="No habits found" />
        </View>
    );
}

export default AllHabits;