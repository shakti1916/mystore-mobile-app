import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { AppStackParamList, RouteList } from '../../partials/navigation/navigation-stack';
import SplashView from '../../component/splash/splash-view';

type NavigationProps = StackNavigationProp<AppStackParamList,RouteList.LoginStack>

type Props = {
  navigation :NavigationProps;
}

const InitialRedirectScreen = (props:Props) => {

  useEffect(()=>{
    setTimeout(()=>{
      props.navigation.navigate(RouteList.LoginStack,{screen:RouteList.LoginScreen});
    },1000);

  },);
  return (
    <>
     <SplashView/>
    </>
  );
};

export default InitialRedirectScreen;