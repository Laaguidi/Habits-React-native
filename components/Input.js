import { StyleSheet, Text, TextInput, View } from 'react-native';

import { GlobalStyles } from '../constants/style';

function Input({ label, textInputConfig }) {
    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.mintLeaf,
        marginBottom: 4,
    },
    input: {
        backgroundColor: '#a29bfe',
        color: '#5f27cd',
        padding: 6,
        borderRadius: 6,
        fontSize: 16,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});
//GlobalStyles.colors.