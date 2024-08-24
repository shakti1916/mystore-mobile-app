import React, {useState} from 'react';
import {Text, View} from 'react-native';
import GeneralContainer from '../../component/container/general-conatiner';
import TextInputCustom from '../../component/input/text-input-custom';
import {StyleLibaray} from './style-global';
import ContentHeader from '../../component/Content-header';
import LoginButton from '../../component/button/login-button';
import {StyleGlobalDefination} from '../../libraray/styles/style-global-defination';
import {LoginRequestDTO} from '../../models/dto/login-request-dto';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggelVisiblePassoword = () => {
    setShowPassword(!showPassword);
  };

  const apiFetchOnLoginButton = async () => {
    let requestData: LoginRequestDTO = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch('http://192.168.96.139:3000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('data');
        console.log(data);
      } else {
        console.log('failed');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <GeneralContainer>
      <View style={StyleLibaray._styleBackgroundColorLogin} />
      <View style={StyleLibaray._styleGeneralCardForLogin}>
        <View style={[StyleGlobalDefination.p_10]}>
          <ContentHeader title="Please Sign into Continue!" />
        </View>
        <View style={[StyleGlobalDefination.p_10]}>
          <View style={[StyleGlobalDefination.m_b_10]}>
            <TextInputCustom
              value={email}
              onChange={setEmail}
              title="Please enter email"
            />
          </View>
          <TextInputCustom
            value={password}
            onChange={setPassword}
            icon={true}
            secureTextEntry={true}
            showPassword={showPassword}
            toggelVisiblePassword={toggelVisiblePassoword}
            title="Please enter password"
          />
          <View style={[StyleGlobalDefination.p_t_10]}>
            <LoginButton onPress ={apiFetchOnLoginButton} text="Login" />
          </View>

          <Text style={StyleLibaray._styleSignUpText}>
            You do not have account? signup
          </Text>
        </View>
      </View>
    </GeneralContainer>
  );
};

export default LoginScreen;
