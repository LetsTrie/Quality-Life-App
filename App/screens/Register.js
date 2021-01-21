import React from 'react';
import { View, StyleSheet } from 'react-native';

import AuthIcon from '../components/Auth/AuthIcon';
import Button from '../components/Button';
import Container from '../components/Auth/Container';
import DividerOr from '../components/DividerOr';
import EndOptions from '../components/Auth/EndOptions';
import TopHeading from '../components/Auth/TopHeading';

let borderRadius = 35;

const Register = ({ navigation }) => {
  return (
    <Container>
      <TopHeading heading='Join now!' />
      <View style={styles.loginContainer}>
        <AuthIcon />
        <View style={styles.loginButtons}>
          <Button
            title='Sign up with Facebook'
            style={[styles.BtnWrapper, { backgroundColor: '#385898' }]}
            textStyle={styles.BtnStyle}
          />
          <DividerOr />
          <Button
            title='Sign up with Google'
            style={[styles.BtnWrapper, { backgroundColor: '#db4a39' }]}
            textStyle={styles.BtnStyle}
          />
          <EndOptions
            title1={`Already have an account?`}
            title2={`Login here`}
            title3={`Register as a professional`}
            onPress1={() => navigation.navigate('Login')}
            onPress2={() => navigation.navigate('RegisterPro')}
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
  BtnStyle: {
    letterSpacing: 0.2,
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
});

export default Register;
