import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Link = ({ navigation, text, route }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(route)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    link: {
        fontSize: 18,
        color: 'blue',
        marginLeft: 8,
        marginRight: 8
    }
})

export default Link;
