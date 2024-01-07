import {StyleSheet, Text, View} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';


function ManageHabit({route, navigation}){
    const editedHabitId = route.params?.habitId;
    const isEditing = !!editedHabitId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    return (
        <Text>Manage habits</Text>
    );
}

export default ManageHabit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        //backgroundColor: GlobalStyles.colors.primary800,
        backgroundColor: '#fd79a8'
    },
});