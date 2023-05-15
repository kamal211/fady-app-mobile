import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platform, PixelRatio } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const normalize = (size) => {
  const newSize = size * (screenWidth / 375);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
const PopupStyles = StyleSheet.create({
  popup: {
   
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    paddingHorizontal: 20,
    paddingTop: wp('8%'),
    alignItems: 'center',
  },
  rectangle: {
    width: wp('13%'),
    borderRadius: wp('2%'),
    height: wp('1%'),
    marginTop: -25,

  },

  swiftbirdLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 19,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    
  },
  buttonSpreadIcon: {
    ...Platform.select({
      ios: {
      width: wp('10%'),
      height: wp('8%'),
      marginRight: wp('-2%'),
      },
      android: {
        width: screenWidth * 0.14,
      height: screenHeight * 0.045,
      marginRight: screenWidth * -0.03,
      },
    }),
  },
  buttonIcon: {
    ...Platform.select({
      ios: {
      width: wp('14%'),
      height: wp('2%'),
      marginRight: wp('-2%'),
      },
      android: {
        width: screenWidth * 0.14,
      height: screenHeight * 0.04,
      marginRight: screenWidth * -0.07,
      },
    }),
  },
  button: {
    borderRadius: wp('3%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
   
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(15),
    color: '#fff',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: hp('8%'),
    marginTop: hp('-1.5%'),
  },
  modal: {
    flex: 1,
    margin: 0, // Add this line to remove any default margin
  },
  termsPrivacy: {   
     fontFamily: 'Poppins-SemiBold',    
     fontSize: normalize(15),  },
  
  humanelyIntelligentPoint: {
    fontSize: normalize(35),
  },
  humanelyIntelligent: {
    flexDirection: 'row',
    alignItems: 'baseline',
    fontFamily: 'Poppins-SemiBold',
    fontSize:  normalize(14),
    lineHeight: 30,
  },


  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  description:
  {
    fontFamily: "Poppins-SemiBold",
    color: '#fff',
    fontSize:  normalize(16),
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 25,
  },



});

export default PopupStyles;
