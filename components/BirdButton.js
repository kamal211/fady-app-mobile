import React, {useRef, useEffect} from 'react';
import { View, TouchableOpacity, useWindowDimensions, AppState } from 'react-native';
import birdAnimation from '../assets/animations/swiftbird-button-animation.json';
import styles from '../styles/BirdButtonStyles';
import LottieView from 'lottie-react-native';

// Import the function that handle the swifbird button press
import usePopupPanResponder from '../hooks/usePopupPanResponder';

const BirdButton = ({onPress}) => {
  const windowDimensions = useWindowDimensions();
  const screenWidth = windowDimensions.width;
  const screenHeight = windowDimensions.height;
  const lottieRef = useRef(null);
  const {
    panResponder,
  } = usePopupPanResponder();

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
    <View style={styles.swiftButton} {...panResponder.panHandlers}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.swiftButton} 
        {...panResponder.panHandlers}
      >
        <View pointerEvents="box-none">
          <LottieView
            ref= {lottieRef}
            source={birdAnimation}
            style={{ width: screenWidth * 0.6, height: screenHeight * 0.6 }}
            autoPlay
            loop
            pointerEvents="box-none"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BirdButton;
