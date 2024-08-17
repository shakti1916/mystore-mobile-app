import { createStackNavigator } from '@react-navigation/stack';
import InitialRedirectScreen from '../../screens/initial-redirect/initial-redirect';
import LoginScreen from '../../screens/account/login-screen';

import React from 'react';


export enum RouteList {
    InitialRedirectScreen = 'InitialRedirectScreen',
    LoginScreen = 'LoginScreen',
    LoginStack = 'LoginStack',
}
export type LoginStack = {
    [RouteList.LoginScreen] : undefined;
}

export type AppStackParamList = {
    [RouteList.InitialRedirectScreen] : undefined;
    [RouteList.LoginStack] : any;

}



const AppStackNavigator = createStackNavigator<AppStackParamList>();

export function AppStack(){
    return (
        <AppStackNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName={RouteList.InitialRedirectScreen}>
            <AppStackNavigator.Screen options={{
                animationEnabled:false}} name={RouteList.InitialRedirectScreen} component={InitialRedirectScreen}/>
              <AppStackNavigator.Screen options={{
                animationEnabled:false}} name={RouteList.LoginStack} component={LoginStack}/>
        </AppStackNavigator.Navigator>
    );
}


export type LoginStackParamList = {
    [RouteList.LoginScreen] : undefined;
}

const LoginStackNavigator = createStackNavigator<LoginStackParamList>();


export function LoginStack(){
    return (
        <LoginStackNavigator.Navigator screenOptions={{headerShown:false}} >
            <LoginStackNavigator.Screen  name={RouteList.LoginScreen} component={LoginScreen}/>
        </LoginStackNavigator.Navigator>
    );
}

