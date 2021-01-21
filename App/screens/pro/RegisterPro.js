import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import Container from '../../components/Auth/Container';
import EndOptions from '../../components/Auth/EndOptions';
import Picker from '../../components/Picker';
import TextInput from '../../components/TextInput';
import TopHeading from '../../components/Auth/TopHeading';

let borderRadius = 35;
const genderLists = [
  { label: 'Male', value: 0 },
  { label: 'Female', value: 1 },
  { label: 'Others', value: 2 },
];
const designationLists = [
  { label: 'Clinical psychologist', value: 10 },
  { label: 'Assistant clinical psychologist', value: 11 },
  { label: 'Psychiatrist', value: 12 },
];

const RegisterPro = ({ navigation }) => {
  const [gender, setGender] = useState(null);
  const [designation, setDesignation] = useState(null);
  return (
    <Container>
      <TopHeading heading='Join now!' subHeading='professional' />
      <View style={[styles.loginContainer, { paddingTop: 10 }]}>
        <View style={styles.loginButtons}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon='account'
            keyboardType='default'
            name='name'
            placeholder='Name'
            textContentType='name'
          />

          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          />

          <Picker
            width='92%'
            icon='gender-male-female-variant'
            placeholder='Gender'
            selectedItem={gender}
            onSelectItem={(g) => setGender(g)}
            items={genderLists}
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

          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Confirm password'
            secureTextEntry
            keyboardType='default'
          />

          <Picker
            width='92%'
            icon='card-account-details-star'
            placeholder='Designation'
            selectedItem={designation}
            onSelectItem={(d) => setDesignation(d)}
            items={designationLists}
          />

          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon='briefcase-account'
            name='profession'
            placeholder='Profession'
          />
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon='map-marker-radius'
            name='workplace'
            placeholder='Workplace'
          />

          <Button
            title='Sign in'
            style={{
              marginVertical: 10,
              marginBottom: 0,
            }}
          />
          <EndOptions
            title1={`Already have an account?`}
            title2={`Login here`}
            title3={`Register as a user`}
            onPress1={() => navigation.navigate('LoginPro')}
            onPress2={() => navigation.navigate('Register')}
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

export default RegisterPro;
