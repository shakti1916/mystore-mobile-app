/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppContainer from './AppContainer';


function App(): React.JSX.Element {


  return (
    <GestureHandlerRootView>
      <AppContainer/>
    </GestureHandlerRootView>

  );
}



export default App;
