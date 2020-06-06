import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
    return (
        <MapView 
            style={styles.map} 
            initialRegion={{
                latitude: -37.840935,
                longitude: 144.946457,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            }}    
        />
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;