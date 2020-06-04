import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ header, errorMessage, buttonText, onSubmit }) => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Text style={styles.header} h3>{header}</Text>
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
            {errorMessage ?
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                : null}
            <Button
                style={styles.button}
                title={buttonText}
                onPress={() => onSubmit({ email, password })}
            />
            <Spacer />
        </>
    )
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

export default AuthForm;
