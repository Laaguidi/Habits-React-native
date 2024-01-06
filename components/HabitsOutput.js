import { View, Text } from 'react-native';
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
            <HabitsList/>
        </View>
    );
}

export default HabitsOutput;