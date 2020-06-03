import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './components/Spacer';

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header} h3>Sign Up for Tracker</Text>
            <Spacer>
                <Input style={styles.input} label="Email" />
                <Input style={styles.input} label="Password" />
            </Spacer>
            <Button style={styles.button} title="Sign Up" />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
        marginLeft: 15,
        marginRight: 15
    },
    header: {
        marginLeft: 10,
        marginRight: 10
    },
    button: {
        marginLeft: 10,
        marginRight: 10
    }
});

export default SignupScreen;