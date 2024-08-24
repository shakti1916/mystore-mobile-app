import {StyleSheet} from 'react-native';
import {StyleGlobalDefination} from '../../libraray/styles/style-global-defination';

const styles = StyleSheet.create({
  generalCardForLogin: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    top: 100,
    overflow: 'hidden',
    backgroundColor: StyleGlobalDefination.backGroundColorWhite.backgroundColor,
  },

  backgroundColorLogin: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor:
      StyleGlobalDefination.backgroundColorForLogin.backgroundColor,
  },
  signUpText: {
    color:'black',
    fontFamily:StyleGlobalDefination.globalFontFamily.fontFamily,
    fontSize:StyleGlobalDefination.textSizeMeduim.fontSize,
    marginTop:StyleGlobalDefination.m_t_10.marginTop,
    textAlign:'center',
    
  },

  

});

export const StyleLibaray = {
  _styleGeneralCardForLogin: [styles.generalCardForLogin],
  _styleBackgroundColorLogin: [styles.backgroundColorLogin],

  _styleSignUpText:[
    styles.signUpText
  ]
};
