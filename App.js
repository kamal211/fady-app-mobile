import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GreetingAnimation from './components/GreetingAnimation';
import BirdButton from './components/BirdButton';
import HomeIndicator from './components/HomeIndicator';
import styles from './styles/AppStyles';
import ModalPopup from './components/ModalPopup';
import  useBirdPress  from './utils/useBirdPress';
import usePopupPanResponder from './hooks/usePopupPanResponder';

const App = () => {
  const { panResponder, popupVisible, setPopupVisible, popupTranslateY, overlayOpacity } = usePopupPanResponder();
  const handleBirdPress = useBirdPress();

  return (
<SafeAreaView style={styles.container} {...panResponder.panHandlers}>
      <GreetingAnimation />
      <BirdButton onPress={handleBirdPress} />
      <ModalPopup
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        popupTranslateY={popupTranslateY}
        overlayOpacity={overlayOpacity}
      />
      {/* <HomeIndicator /> */}

    </SafeAreaView>
  );
};

export default App;
