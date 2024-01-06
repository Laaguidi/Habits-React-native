
import { StyleSheet, View, Text } from 'react-native';
import HabitsList  from './HabitsList';
import DailyHabits from "./DailyHabits";
/*
const dummy_habits = [
    {
        id: 'e1',
        description: 'Test 1',
    },
    {
        id: 'e2',
        description: 'Test 2',
    },
    {
        id: 'e3',
        description: 'Test 3',
    },
    {
        id: 'e4',
        description: 'Test 4',
    },
    {
        id: 'e5',
        description: 'Test 5',
    },
    {
        id: 'e6',
        description: 'Test 6',
    },
    {
        id: 'e7',
        description: 'Test 7',
    },
    {
        id: 'e8',
        description: 'Test 8',
    }
];
*/
function HabitsOutput({ habits, fallbackText, onPress }){
    let message = <Text style={styles.noHabitsMessage}>{fallbackText}</Text>;

    if (habits.length > 0) {
        message = <HabitsList habits={habits} />;
    }

    return (
        <View style={styles.container}>
            <DailyHabits/>
            {/*<HabitsList habits={dummy_habits} />*/}
            {/*<HabitsList habits={habits} />*/}
            { message }
        </View>
    );
}

export default HabitsOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        margin: 18,
    },
    noHabitsMessage: {
        color: '#2d3436',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    },
});

