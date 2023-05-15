import React from 'react';
import { View, Text, TouchableOpacity, ScrollView  } from 'react-native';
import SwiftBirdLogo from '../assets/Swiftbird-Logo.svg';
import SpreadIcon from '../assets/Spread-Icon.svg';
import TreeIcon from '../assets/Tree-Icon.svg';
import EmailIcon from '../assets/Email-Icon.svg';
import styles from '../styles/PopupStyles';
import { COLORS } from '../constants'; // <-- Import COLORS
import HomeIndicator from '../components/HomeIndicator';

 // Popup component and its content
 const PopupContent = ({ onSpreadTheBird, onSwiftIntoWebsite, onWriteUsAnEmail, onClickTermsPrivacy, panHandlers }) => {

  return (
    <View style={{...styles.popup, backgroundColor: COLORS.popup}} 
    {...panHandlers}>
      <View style={{...styles.rectangle, backgroundColor: COLORS.popupRectangle}} />
      <View style={styles.swiftbirdLogo}>
      <SwiftBirdLogo width={145} height={40} />
      </View>
      <Text style={styles.description}>
        A startup filtering the internet to help people find content that matters.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onSpreadTheBird} style={{...styles.button, backgroundColor: COLORS.popupButtons}}>
          <View style={styles.contentWrapper}>
            <Text style={{...styles.buttonText, color: COLORS.popupButtonText}}>Spread the bird</Text>
            <SpreadIcon   style={styles.buttonSpreadIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSwiftIntoWebsite} style={{...styles.button, backgroundColor: COLORS.popupButtons}}>
          <View style={styles.contentWrapper}>
            <Text style={{...styles.buttonText, color: COLORS.popupButtonText}}>Swift into our website</Text>
            <TreeIcon style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onWriteUsAnEmail} style={{...styles.button, backgroundColor: COLORS.popupButtons}}>
          <View style={styles.contentWrapper}>
            <Text style={{...styles.buttonText, color: COLORS.popupButtonText}}>Write us an email</Text>
            <EmailIcon style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
      </View>
    
      <View style={styles.footer}>
        <TouchableOpacity onPress={onClickTermsPrivacy}>
        <Text style={{...styles.termsPrivacy, color: COLORS.termsPrivacyColor}}>Terms & Privacy</Text>
        </TouchableOpacity>
        
        <Text >
          <Text style={{...styles.humanelyIntelligent, color: COLORS.humanelyIntelligentColor}}>Humanely Intelligent</Text>
          <Text style={{...styles.humanelyIntelligentPoint, color: COLORS.humanelyIntelligentColorPoint}}>. </Text>
        </Text>
      </View>
      {/* <HomeIndicator /> */}

    </View>
  );
};

export default PopupContent;
