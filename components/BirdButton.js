import React from 'react';
import { View, TouchableOpacity, useWindowDimensions } from 'react-native';
import birdAnimation from '../assets/animations/swiftbird-button-animation.json';
import styles from '../styles/BirdButtonStyles';
import LottieView from 'lottie-react-native';

// Import the function that handle the swifbird button press
import usePopupPanResponder from '../hooks/usePopupPanResponder';

const BirdButton = ({onPress}) => {
  const windowDimensions = useWindowDimensions();
  const screenWidth = windowDimensions.width;
  const screenHeight = windowDimensions.height;

  const {
    panResponder,
  } = usePopupPanResponder();

  return (
    <View style={styles.gestureView} {...panResponder.panHandlers}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.birdButton}
        {...panResponder.panHandlers}
      >
        <View pointerEvents="box-none">
          <LottieView
            source={birdAnimation}
            style={{ width: screenWidth * 0.5, height: screenHeight * 0.5 }}
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
