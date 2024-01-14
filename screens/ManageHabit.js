import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useContext,useLayoutEffect, useState } from 'react';
import IconButton from "../components/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/Button";
import { HabitsContext } from '../store/habits-context';
import HabitForm from "../components/HabitForm";
import AsyncStorage from '@react-native-async-storage/async-storage';



function ManageHabit({route, navigation}){

    const habitsCtx = useContext(HabitsContext);

    const editedHabitId = route.params?.habitId;
    const isEditing = !!editedHabitId;

    const selectedHabit = habitsCtx.habits.find(
        (habit) => habit.id === editedHabitId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

/*
    function deleteHabitHandler() {
        habitsCtx.deleteHabit(editedHabitId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(habitData) {
        if (isEditing) {
            habitsCtx.updateHabit(
                editedHabitId,
                habitData

            );
        } else {
            habitsCtx.addHabit(
                habitData

            );
        }
        navigation.goBack();
    }*/

    async function getAllHabitsFromStorage() {
        try {
            const jsonHabits = await AsyncStorage.getItem('habits');
            return jsonHabits != null ? JSON.parse(jsonHabits) : [];
        } catch (error) {
            console.error('Error getting habits:', error);
            return [];
        }
    }


    //AsyncStorage:
    async function saveHabitsToStorage(habits) {
        try {
            const jsonHabits = JSON.stringify(habits);
            await AsyncStorage.setItem('habits', jsonHabits);
        } catch (error) {
            console.error('Error saving habits:', error);
        }
    }

    async function confirmHandler(habitData) {
        if (isEditing) {
            habitsCtx.updateHabit(
                editedHabitId,
                habitData
                //{
                //   description: 'Test!!!!',
                // }
            );
        } else {
            habitsCtx.addHabit( habitData
                //{
                // description: 'Test',
                //}
            );
        }
        const updatedHabits = habitsCtx.getAllHabits(); // Assuming a function to get all habits
        await saveHabitsToStorage(updatedHabits);
        navigation.goBack();
    }

    async function deleteHabitHandler() {
        habitsCtx.deleteHabit(editedHabitId);
        const updatedHabits = habitsCtx.getAllHabits();
        await saveHabitsToStorage(updatedHabits);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <HabitForm
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                defaultValues={selectedHabit}
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
            />
           {/* <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={confirmHandler}>
                    {isEditing ? 'Update' : 'Add'}
                </Button>
            </View>*/}
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.errorColor}
                        size={36}
                        onPress={deleteHabitHandler}
                    />
                </View>
            )}
        </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        //borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
});