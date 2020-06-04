import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    
    return (   
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={styles.header}>My Account</Text>
            <Spacer>
            <Button 
                style={styles.button}
                title="Sign out"
                onPress={signout} 
            />
            </Spacer>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        marginLeft: 8
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 75,
        marginLeft: 15,
        marginRight: 15
    },
    button: {
        marginLeft: 8,
        marginRight: 8
    },
});

export default AccountScreen;