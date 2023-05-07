import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const PopupStyles = StyleSheet.create({
  popup: {
   
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    paddingHorizontal: 20,
    paddingTop: wp('8%'),
    paddingBottom: wp('5%'),
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
      width: screenWidth * 0.14,
      height: screenHeight * 0.04,
      marginRight: screenWidth * -0.03,
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
      width: screenWidth * 0.14,
      height: screenHeight * 0.04,
      marginRight: screenWidth * -0.07,
      },
      android: {
        width: screenWidth * 0.14,
      height: screenHeight * 0.04,
      marginRight: screenWidth * -0.07,
      },
    }),
  },
  button: {
    borderRadius: wp('4.5%'),
    paddingVertical: hp('2.5%'),
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
    fontSize: RFValue(13, 600),
    lineHeight: RFValue(20, 600),
    color: '#fff',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  modal: {
    flex: 1,
    margin: 0, // Add this line to remove any default margin
  },
  termsPrivacy: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(11, 600),
    lineHeight: RFValue(20, 600),
    fontWeight: '600',
  },
  humanelyIntelligentPoint: {
    fontSize: RFValue(25, 600),
  },
  humanelyIntelligent: {
    flexDirection: 'row',
    alignItems: 'baseline',
    fontFamily: 'Poppins-SemiBold',
    fontSize:  RFValue(14),
    fontWeight: '600',
    lineHeight: 24,
  },


  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  description:
  {
    fontFamily: "Poppins-SemiBold",
    color: '#fff',
    fontSize:  RFValue(14),
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 25,
  },



});

export default PopupStyles;
