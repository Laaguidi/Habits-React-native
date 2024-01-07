import { Pressable, StyleSheet, Text, View } from 'react-native';

import {GlobalStyles} from "../constants/style";
import {useNavigation} from "@react-navigation/native";

function HabitItem({ id, text }) {
    const navigation = useNavigation();

    function habitPressHandler() {
        navigation.navigate('ManageHabit', {
            habitId: id
        });
    }

    return (
        <Pressable
            onPress={habitPressHandler}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.habitItem}>
              <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    );
}

export default HabitItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
    habitItem: {
        padding: 14,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.itemBackground,
        flexDirection: 'row',
        alignItems: 'center', // Align items horizontally
        //justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 5,
        shadowColor: 'blue',
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    text: {
        color: 'white',
        justifyContent: 'center',
    },
    checkbox: {
        //alignSelf: 'center',
        marginLeft: 10,
    },
});