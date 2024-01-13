import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import Input from './Input';
import Button from "./Button";

function HabitForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
    const [habitsText, setHabitsText] = useState('');



    function habitChangedHandler(enteredValue) {
        setHabitsText(enteredValue);
    }

    function habitChangedHandler(enteredValue) {
        console.log('Entered text:', enteredValue); // Check if text is logged in the console
        setHabitsText(enteredValue); // Update the state with the entered text
    }

    function submitHandler() {
        const habitData = {
            description: habitsText
        }
        //To do: check if no text also
        const descriptionIsValid = habitData.description.trim().length <= 0;
        if (!descriptionIsValid ){
            Alert.alert('Invalid input', 'Please check your input values');
            return;
        }

            onSubmit(habitData);
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Habit</Text>
            <Input
                label="Your Habit"
                textInputConfig={{
                    multiline: true,
                    // autoCapitalize: 'none'
                    // autoCorrect: false // default is true
                    onChangeText: habitChangedHandler,

                }}
            />

            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler} >
                    {/* {isEditing ? 'Update' : 'Add'} */}
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
}

export default HabitForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 24,
        textAlign: 'center'
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

});