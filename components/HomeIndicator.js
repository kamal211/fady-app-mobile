import React from 'react';
import { View} from 'react-native';
const HomeIndicator = () => {
  return (
      <View
        style={{
          position: "absolute",
          bottom: 8,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#979797",
            width: 150,
            borderRadius: 10,
            height: 5,
          }}
        />
      </View>
  );
};



  export default HomeIndicator;