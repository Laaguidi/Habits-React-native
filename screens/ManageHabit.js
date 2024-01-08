import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import IconButton from "../components/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/Button";



function ManageHabit({route, navigation}){
    const editedHabitId = route.params?.habitId;
    const isEditing = !!editedHabitId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    function deleteHabitHandler() {}

    function cancelHandler() {}

    function confirmHandler() {}

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={confirmHandler}>
                    {isEditing ? 'Update' : 'Add'}
                </Button>
            </View>
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