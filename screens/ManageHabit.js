import {StyleSheet, Text, View} from "react-native";
import { useNavigation } from '@react-navigation/native';

function ManageHabit({route, navigation}){


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