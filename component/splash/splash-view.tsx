import React from 'react';
import { Image, View } from 'react-native';
import { ImageGlobal } from '../../libraray/image-global';
import { StyleLibaray } from '../styles';

const SplashView = () => {
  return (
    <View style={StyleLibaray._styleFlashImageView}>
        <Image  resizeMode="contain" source={ImageGlobal.splashLogo}/>
    </View>
  );
};

export default SplashView;