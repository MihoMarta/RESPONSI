import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginButton from './src/components/LoginButton';
import TextInputEmail from './src/components/TextInputEmail';
import Menu from './src/components/Menu';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#B99470'}}>
      <StatusBar backgroundColor={'#FEFAE0'} barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
        }}>
        <Image
          source={require('./src/images/coffee.png')}
          style={{width: 200, height: 200}}
        />
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>
          CO<Text style={{color: '#994D1C'}}>SPACE</Text>
        </Text>
        <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 18}}>
          Login
        </Text>
      </View>

      <TextInputEmail
        state={email}
        set={setEmail}
        icon="envelope"
        placeholder="Masukkan email"
        isPassword={false}
      />
      <TextInputEmail
        state={password}
        set={setPassword}
        icon="lock"
        placeholder="masukkan password"
        isPassword={true}
      />

      <LoginButton text="Login" color="#2396F2" />

      <Menu signupText="Daftar" forgotPasswordText="Lupa Password?" />
    </ScrollView>
  );
};

export default Login;
