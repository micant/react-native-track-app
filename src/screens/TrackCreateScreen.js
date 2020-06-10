import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => { // useCallback is a memoized (cached) callback that will only change in memory if its arguments change. This enables the callback and the function that the callback is passed into to be mutually recursive (remain logically paired) in memory.   
        addLocation(location, recording); //
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a  track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);