import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Link from '../components/Link';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <AuthForm 
                header="Sign up for Tracker"
                errorMessage={state.errorMessage}
                buttonText="Sign up"
                onSubmit={signup}
            />
            <Link 
                route="Signin"
                text={`Already have an account?\nSign in instead.`} 
                navigation={navigation}
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
    }
});

export default SignupScreen;