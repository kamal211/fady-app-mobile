import { Share, Alert } from 'react-native';

// Function to handle sharing the app
export const handleShare = async () => {
const url = 'https://www.apple.com/app-store';
    try {
      await Share.share({
        message: `Here's your Swiftbird \n\n${url}`,

      });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while sharing the app');
    }
  };