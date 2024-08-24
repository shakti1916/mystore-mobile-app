import {StyleSheet} from 'react-native';
import { StyleGlobalDefination } from '../libraray/styles/style-global-defination';

const styles = StyleSheet.create({
    spalshLogo:{
        width:100,
        height:100,
    },
    inputTitle:{
        fontFamily:StyleGlobalDefination.globalFontFamily.fontFamily,
        fontWeight:'600',
        color:"blue",
        marginBottom:StyleGlobalDefination.m_b_10.marginBottom

    },
    contentHeaderTitle:{
        color:'orange',
        fontWeight:'800',
        fontFamily:StyleGlobalDefination.globalFontFamily.fontFamily,
        fontSize:StyleGlobalDefination.textSizeLarge.fontSize,
        },
        Input:{
            borderWidth:1,
            borderColor:'#ccc',
            borderRadius:4,
            padding:8,
            backgroundColor:'#ffffffcc',
        },

        loginButton:{
            padding:8,
            backgroundColor:'blue',
            borderRadius:8

        },
        loginButtontext:{
            color:'white',
            fontFamily:StyleGlobalDefination.globalFontFamily.fontFamily,
            fontSize:StyleGlobalDefination.textSizeMeduim.fontSize,
            textAlign:'center',
            
        },

        eyeInInput:{
            position:'absolute',
            top:'50%',
            right:10,
        }

});

export const StyleLibaray = {
  _styleFlashImageView: [
    StyleGlobalDefination.flexFull,
    StyleGlobalDefination.flexBox,
    StyleGlobalDefination.flexJustifyCenter,
    StyleGlobalDefination.flexAlignItemsCenter,
  ],
  _styleSplashLogo:[
    styles.spalshLogo,

  ],
  _styleInputTitle:[
    styles.inputTitle,

],
_styleContentHeader:[
    styles.contentHeaderTitle,
],
_styleInput:[
    styles.Input,
],
_styleLoginButton:[
styles.loginButton,
],
_styleLoginButtonText:[
    styles.loginButtontext,
],
_styleEyeInInput:[
    styles.eyeInInput,
]
};