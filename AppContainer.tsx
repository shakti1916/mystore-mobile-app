import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppStack } from './partials/navigation/navigation-stack';

const AppContainer = () => {
  return (
    <NavigationContainer>
   <AppStack/>
    </NavigationContainer>
  );
};

export default AppContainer;