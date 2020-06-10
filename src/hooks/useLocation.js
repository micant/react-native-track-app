import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => { 
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber; 
        const startWatching = async () => { 
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync({ 
                    accuracy: Accuracy.BestForNavigation, 
                    timeInterval: 1000, 
                    distanceInterval: 10 
                },
                    // called once per location update
                    // contains location data object
                    callback 
                );
            } catch (err) {
                // bug in expo not catching error on ios
                setErr(err); 
            }
        };
        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
                subscriber = null;
            }
        };
        // clean up function to remove subscription before invoking component is removed from UI
        // or removes subscription before useEffect is invoked again - preventing memory leaks
        return () => { 
            if (subscriber) { 
                subscriber.remove() 
            }
        };
    // any props or state variables that useEffect depends on or has passed in from outside scope
    // if these change useEffect will be called again 
    }, [shouldTrack, callback]); 
                                 
    return [err];
};

