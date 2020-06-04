import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import Link from '../components/Link';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                header="Sign in to Tracker"
                errorMessage={state.errorMessage}
                buttonText="Sign in"
                onSubmit={signin}
            />
            <Link
                navigation={navigation}
                text={`Don't have an account?\nGo back to sign up.`}
                route="Signup"
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;