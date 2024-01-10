import * as React from 'react';
import { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import HabitsOutput from "../components/HabitsOutput";


function AllHabits() {
    const habitsCtx = useContext(HabitsContext);

    return (
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
            <HabitsOutput habits={habitsCtx.habits} />
        </View>
    );
}

export default AllHabits;