import { SafeAreaView} from 'react-native';
import React from 'react';

interface IOwProps {
    children?: React.ReactNode; 
}

const GeneralContainer = (props: IOwProps) => {
  return( 
  <>
  <SafeAreaView style={{flex:1}}>
    {props.children} 
    </SafeAreaView>
    </>
  );
};

export default GeneralContainer;
