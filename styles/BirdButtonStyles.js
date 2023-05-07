import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const BirdButtonStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: wp('4%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(13, 600),
    lineHeight: RFValue(20, 600),
  },
});

export default BirdButtonStyles;
