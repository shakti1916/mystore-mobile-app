import { StyleSheet } from 'react-native';
import { FunctionGlobal } from '../utils/Function-global';

export  const StyleGlobalDefination = StyleSheet.create({
    flexFull:{
        flex:1,
    },
    flexJustifyCenter:{
        justifyContent:'center',
    },

    flexBox:{
        display:'flex',
    },
    flexAlignItemsCenter:{
        alignItems:'center',
    },
    borderTest:{
        color:'red',
        borderWidth:1,
    },
    backGroundColor:{
        backgroundColor:'#000',
    } ,
    globalFontFamily:{
        fontFamily:'Oswald',
    },
    backGroundColorWhite:{
        backgroundColor:'white',
    },
    backgroundColorForLogin:{
        backgroundColor:'blue',
    },

    textSizeRegular:{
        fontSize:FunctionGlobal.ScaledSize(14)
    },
    textSizeMeduim:{
        fontSize:FunctionGlobal.ScaledSize(16)
    },
    textSizeLarge:{
        fontSize:FunctionGlobal.ScaledSize(18)
    },
    p_10:{
        padding:FunctionGlobal.ScaledSize(10)
    },

    p_t_10:{
        paddingTop:FunctionGlobal.ScaledSize(10)
    },
    m_t_10:{
        marginTop:FunctionGlobal.ScaledSize(10),

    },
    m_b_10:{
        marginBottom:FunctionGlobal.ScaledSize(10)
    },

    m_b_20:{
        marginBottom:FunctionGlobal.ScaledSize(20)
    },


});