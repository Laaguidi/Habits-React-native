import { View, Text, StyleSheet } from 'react-native';
import HabitsList from "./HabitsList";



function HabitsOutput({ habits, fallbackText }) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>;

    if (habits.length > 0) {
        content = <HabitsList habits={habits} />;
    }

    return (
        <View>
         <Text>List Of habits</Text>
            {content}
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
    },
    infoText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    },
});