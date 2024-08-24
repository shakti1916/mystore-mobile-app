import { View, Text } from 'react-native';
import React from 'react';
import { StyleLibaray } from './styles';

interface Props {
    title?:string
}

const ContentHeader = (props:Props) => {
  return (
    <View>
      <Text style={StyleLibaray._styleContentHeader}>{props.title}</Text>
    </View>
  )
}

export default ContentHeader