import { useState, useRef } from 'react';
import { PanResponder, Animated, useWindowDimensions } from 'react-native';
import { togglePopup } from '../utils/popupController';

const usePopupPanResponder = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const popupTranslateY = useRef(new Animated.Value(0)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const windowDimensions = useWindowDimensions();
  const screenWidth = windowDimensions.width;
  const screenHeight = windowDimensions.height;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderRelease: (e, gestureState) => {
      // console.log('onPanResponderRelease called');
      if (gestureState.dy < -100) {
        setPopupVisible(true);
        // console.log('Swiped up');
        togglePopup(setPopupVisible, popupVisible, screenHeight, popupTranslateY, overlayOpacity);
      } else if (gestureState.dy > 100) {
        // console.log('Swiped down');
        setPopupVisible(false);
        Animated.timing(popupTranslateY, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return { panResponder, popupVisible, setPopupVisible, popupTranslateY, overlayOpacity };
};
export default usePopupPanResponder;
