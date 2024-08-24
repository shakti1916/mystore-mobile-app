import {  Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { StyleLibaray } from '../styles';
interface Props{
    text?:string;
    onPress?:() => void;

}

const LoginButton = (props:Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={StyleLibaray._styleLoginButton}>
      <Text style={StyleLibaray._styleLoginButtonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default LoginButton;