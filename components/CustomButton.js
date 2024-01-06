import {Pressable, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create a stack navigator
const Stack = createNativeStackNavigator();
function CustomButton({children}) {
    const navigation = useNavigation();
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]}
                   onPress={() => navigation.navigate('AllHabits')}
        >
            <View>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        backgroundColor:'#1abc9c',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderColor: '#16a085',
        borderRadius: 10,
        margin: 40
    },
    text: {
        color: "white",
        fontSize: 19,
        justifyContent: 'center',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.7
    }
});