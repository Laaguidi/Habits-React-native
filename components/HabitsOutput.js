import { View, Text, StyleSheet } from 'react-native';
import HabitsList from "./HabitsList";

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

function HabitsOutput({ habits }) {
    return (
        <View>
         <Text>List Of habits</Text>
            <HabitsList habits={dummy_habits}/>
        </View>
    );
}

export default HabitsOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 0,
        paddingTop: 24,
        backgroundColor: '#8c7ae6'
    }

});