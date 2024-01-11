import { View } from 'react-native';
import Input from './Input';

function HabitForm() {


    return (
        <View>
            <Input
                label="Your Habit"
                textInputConfig={{
                    multiline: true,
                    // autoCapitalize: 'none'
                    // autoCorrect: false // default is true
                }}
            />
        </View>
    );
}

export default HabitForm;