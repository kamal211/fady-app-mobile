import { Animated} from 'react-native';  
  
  // Function to toggle the popup
  export const togglePopup = (setPopupVisible, popupVisible, screenHeight, popupTranslateY, overlayOpacity) => {
    console.log('Toggling popup');

    setPopupVisible(!popupVisible);
    Animated.timing(overlayOpacity, {
      toValue: !popupVisible ? 0.5 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };