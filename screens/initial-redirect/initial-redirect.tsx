import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { AppStackParamList, RouteList } from '../../partials/navigation/navigation-stack';
import LoginScreen from '../account/login-screen';
import SplashView from '../../partials/splash/splash-view';

type NavigationProps = StackNavigationProp<AppStackParamList,RouteList.LoginStack>

type Props = {
  navigation :NavigationProps;
}

const InitialRedirectScreen = (props:Props) => {
  const [isShowSplash,setIsShowSplash] = useState<boolean>(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsShowSplash(false);
      props.navigation.navigate(RouteList.LoginStack,{screen:RouteList.LoginScreen});
    },1000);

  },);
  return (
    <>
    {isShowSplash ? <SplashView/> : <LoginScreen/>}
    </>
  );
};

export default InitialRedirectScreen