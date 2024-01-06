import {StyleSheet, Text, View} from "react-native";
import { useContext,useLayoutEffect, useEffect, useState } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import IconButton from "../components/IconButton";
import { HabitsContext } from '../store/habits-context';
import HabitForm from "../components/HabitForm";
//import PushNotification from 'react-native-push-notification';



function ManageHabit({route, navigation}){

    const habitsCtx = useContext(HabitsContext);

    const editedHabitId = route.params?.habitId;
    const isEditing = !!editedHabitId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Habit' : 'Add Habit',
        });
        //If those change we must render the title:
    }, [navigation, isEditing]);

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
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={confirmHandler}
                //isEditing={isEditing}
                //deleteHabit={deleteHabitHandler}
            />

            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        //color={GlobalStyles.colors.error500}
                        color= "red"
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
        backgroundColor: '#ff7675',
        alignItems: 'center',
    },
});