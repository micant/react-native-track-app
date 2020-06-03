import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    console.log(state);

    return (
        <View style={styles.container}>
            <Text style={styles.header} h3>Sign Up for Tracker</Text>
            <Spacer>
                <Input 
                    style={styles.input} 
                    label="Email" value={email} 
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input 
                    secureTextEntry
                    style={styles.input} 
                    label="Password" 
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            {state.errorMessage ? 
                <Text style={styles.errorMessage}>{state.errorMessage}</Text>
            : null}
            <Button 
                style={styles.button} 
                title="Sign Up" 
                onPress={()=> signup({ email, password })}
            />
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
        marginLeft: 8,
        marginRight: 8
    },
    button: {
        marginLeft: 8,
        marginRight: 8
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 15
    }
});

export default SignupScreen;