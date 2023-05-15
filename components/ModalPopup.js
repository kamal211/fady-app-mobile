import React from 'react';
import { Modal, TouchableWithoutFeedback, Animated, Linking, Alert } from 'react-native';
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
        onSwiftIntoWebsite={() => Linking.openURL('https://www.swiftbird.app/')}
        onWriteUsAnEmail={async () => {
          try {
            const canOpen = await Linking.canOpenURL('mailto:hello@swiftbird.app');
            if (canOpen) {
              await Linking.openURL('mailto:hello@swiftbird.app');
            } else {
              Alert.alert(
                'No Email App Found',
                'We could not find an email app on your device. Please manually send an email to hello@swiftbird.app ',
                [{ text: 'OK' }]
              );
            
            }
          } catch (error) {
            console.error('Error opening email:', error);
          }
        }}
        onClickTermsPrivacy= {() => Linking.openURL('https://www.swiftbird.app/terms')}
        
        />
      </Animated.View>
    </Modal>
  );
};

export default ModalPopup;
