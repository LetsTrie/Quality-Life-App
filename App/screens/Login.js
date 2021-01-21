import React from 'react';
import { View, StyleSheet } from 'react-native';

import AuthIcon from '../components/Auth/AuthIcon';
import Button from '../components/Button';
import Colors from '../config/colors';
import Container from '../components/Auth/Container';
import DividerOr from '../components/DividerOr';
import EndOptions from '../components/Auth/EndOptions';
import TopHeading from '../components/Auth/TopHeading';

let borderRadius = 35;

const Login = ({ navigation }) => {
  return (
    <Container>
      <TopHeading heading='Get Started!' />
      <View style={styles.loginContainer}>
        <AuthIcon />
        <View style={styles.loginButtons}>
          <Button
            title='Login with Facebook'
            style={[styles.BtnWrapper, { backgroundColor: '#385898' }]}
            textStyle={styles.BtnStyle}
            onPress={() => navigation.navigate('AdditionalInformation')}
          />
          <DividerOr />
          <Button
            title='Login with Google'
            style={[styles.BtnWrapper, { backgroundColor: '#db4a39' }]}
            textStyle={styles.BtnStyle}
            onPress={() => navigation.navigate('AdditionalInformation')}
          />
          <EndOptions
            title1={`Don't have an account?`}
            title2={`Register here`}
            title3={`Login as a professional`}
            onPress1={() => navigation.navigate('Register')}
            onPress2={() => navigation.navigate('LoginPro')}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  loginContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  loginButtons: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  BtnWrapper: {
    marginVertical: 0,
    marginBottom: 0,
  },
  BtnStyle: {
    letterSpacing: 0.2,
  },
});

export default Login;
