import React from 'react';
import { Modal, TouchableWithoutFeedback, Animated, Linking } from 'react-native';
import PopupContent from './Popup';
import styles from '../styles/PopupStyles';
import { handleShare } from '../utils/handleShare';

const ModalPopup = ({ popupVisible, setPopupVisible, popupTranslateY, overlayOpacity, panHandlers }) => {
  console.log('Rendering ModalPopup', popupVisible);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
    Animated.timing(overlayOpacity, {
      toValue: !popupVisible ? 0.5 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={popupVisible}
      onRequestClose={togglePopup}
      style={styles.modal}
    >
      <TouchableWithoutFeedback onPress={togglePopup}>
        <Animated.View
          style={[
            styles.modalOverlay,
            { opacity: overlayOpacity },
          ]}
        />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.popupContainer,
          { transform: [{ translateY: popupTranslateY }] },
        ]}
      >
        <PopupContent 
        panHandlers={panHandlers} 
        onSpreadTheBird={handleShare}
        onSwiftIntoWebsite={() => Linking.openURL('https://hopefulbamboo.world/')}
        onWriteUsAnEmail={() => Linking.openURL('mailto:info@example.com')}
        onClickTermsPrivacy= {() => Linking.openURL('https://hopefulbamboo.world/')}
        onClickHumanelyIntelligent= {() => Linking.openURL('https://hopefulbamboo.world/')}
        />
      </Animated.View>
    </Modal>
  );
};

export default ModalPopup;
