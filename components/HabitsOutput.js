import { View, Text, StyleSheet } from 'react-native';
import HabitsList from "./HabitsList";



function HabitsOutput({ habits }) {
    return (
        <View>
         <Text>List Of habits</Text>
            <HabitsList habits={habits}/>
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