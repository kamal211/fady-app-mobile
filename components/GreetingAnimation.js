import React, {useRef, useEffect} from 'react';
import { View, AppState} from 'react-native';
import LottieView from 'lottie-react-native';
import { useWindowDimensions } from 'react-native';

/// Import function that handle the time to display the correct animation ///

import { getGreetingAnimation } from '../utils/getGreetingAnimation';


const GreetingAnimation = () => {
  const windowDimensions = useWindowDimensions();
  const screenWidth = windowDimensions.width;
  const lottieRef = useRef(null);
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        // Restart your bird button animation here
        if (lottieRef.current){
        lottieRef.current.play();
      }
      }
    };

    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: screenWidth * 0.25,
      }}
    >
      <View style={{ alignItems: 'center'}}>
        <LottieView
          ref= {lottieRef}
          source={getGreetingAnimation()}
          autoPlay
          loop={true}
          style={{
     
            height: screenWidth * 0.35,
          }}
        />
      </View>
    </View>
  );
};

export default GreetingAnimation;

