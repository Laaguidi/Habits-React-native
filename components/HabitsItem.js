import { Pressable,StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';


function HabitsItem({ id, description }){

    function habitPressHandler(){
        navigation.navigate('ManageHabit', {
            habitId: id
        });
    }


    return (
        <Pressable onPress={habitPressHandler} style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
            <View style={styles.habitsItem}>
                <Text style={styles.text}>{description}</Text>
            </View>
        </Pressable>
    );
}

export default HabitsItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
    habitsItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#8e44ad',
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