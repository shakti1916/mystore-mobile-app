import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {StyleLibaray} from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  title?: string;
  icon?: any;
  toggelVisiblePassword?: () => void;
  showPassword?: boolean;
  secureTextEntry?: boolean;
  value:string;
  onChange:(value:string)=> void;
}

const TextInputCustom = (props: Props) => {
  return (
    <View>
      <Text style={StyleLibaray._styleInputTitle}>{props.title}</Text>
      <TextInput
        secureTextEntry={props.secureTextEntry && !props.showPassword}
        style={StyleLibaray._styleInput}
        value={props.value}
        onChangeText={props.onChange}
      />
      {props.icon && (
        <MaterialCommunityIcons
          onPress={props.toggelVisiblePassword}
          style={StyleLibaray._styleEyeInInput}
          name={props.showPassword ? 'eye' : 'eye-off'}
          size={22}
        />
      )}
    </View>
  );
};

export default TextInputCustom;
