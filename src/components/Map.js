import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline }from 'react-native-maps';

const Map = () => {
    let points = [];
    for (let i=0; i<20; i++) {
        points.push({
            latitude: -37.840935 + i * 0.001,
            longitude: 144.946457 + i * 0.001
        })
    }
    return (
        <MapView 
            style={styles.map} 
            initialRegion={{
                latitude: -37.840935,
                longitude: 144.946457,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            }}    
        >
            <Polyline coordinates={points} />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;