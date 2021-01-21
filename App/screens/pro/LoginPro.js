import React from 'react';
import { View, StyleSheet } from 'react-native';

import AuthIcon from '../../components/Auth/AuthIcon';
import Button from '../../components/Button';
import Container from '../../components/Auth/Container';
import EndOptions from '../../components/Auth/EndOptions';
import TextInput from '../../components/TextInput';
import TopHeading from '../../components/Auth/TopHeading';

let borderRadius = 35;

const LoginPro = ({ navigation }) => {
  return (
    <Container>
      <TopHeading heading='Get Started!' subHeading='professional' />
      <View style={styles.loginContainer}>
        <AuthIcon />
        <View style={styles.loginButtons}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          />

          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType='password'
            keyboardType='default'
          />

          <Button
            title='Sign in'
            style={{
              marginVertical: 10,
              marginBottom: 0,
            }}
          />
          <EndOptions
            title1={`Don't have an account?`}
            title2={`Register here`}
            title3={`Login as a user`}
            onPress1={() => navigation.navigate('RegisterPro')}
            onPress2={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  loginButtons: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default LoginPro;
