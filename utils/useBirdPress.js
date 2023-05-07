import { useState, useEffect, useRef } from 'react';
import { Alert, Linking } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const useBirdPress = () => {
  const [uniqueID, setUniqueID] = useState('');
  const lastPress = useRef(0);

  // Get the unique device ID
  useEffect(() => {
    const deviceId = DeviceInfo.getUniqueId();
    setUniqueID(deviceId);
  }, []);

  // Function to handle bird press and fetch swiftbird link
  const handleBirdPress = async () => {
    if (Date.now() - lastPress.current < 5) {
      // Prevent multiple presses within 300 milliseconds
      return;
    }
    lastPress.current = Date.now();
    try {
      // Modify the endpoint to include the unique device ID
      const response = await fetch(
        `https://hopefulbamboo.world/dashboard/api/getLink/?uniq_id=${uniqueID}`,
        {
          redirect: 'follow', // Follow the redirection
        }
      );

      // Open the final URL after following the redirection
      if (response.url) {
        Linking.openURL(response.url);
      } else {
        Alert.alert('Error', 'No URL found in the response');
      }
    } catch (error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);

      Alert.alert('Error', 'An error occurred while fetching the link');
    }
  };

  return handleBirdPress;
};

export default useBirdPress;
