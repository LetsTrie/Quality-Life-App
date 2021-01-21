import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../components/Button';
import Container from '../components/Auth/Container';
import Picker from '../components/Picker';
import TextInput from '../components/TextInput';
import TopHeading from '../components/Auth/TopHeading';

let borderRadius = 35;
const genderLists = [
  { label: 'পুরুষ', value: 0 },
  { label: 'মহিলা', value: 1 },
  { label: 'অন্যান্য', value: 2 },
];
const maritalStatusLists = [
  { label: 'বিবাহিত', value: 10 },
  { label: 'অবিবাহিত', value: 11 },
];

const AdditionalInformation = ({ navigation }) => {
  const [gender, setGender] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  return (
    <Container>
      <TopHeading heading='Additional Information!' />
      <View style={[styles.loginContainer, { paddingTop: 10 }]}>
        <View style={styles.loginButtons}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon='account'
            keyboardType='numeric'
            name='age'
            placeholder='বয়স'
          />

          <Picker
            width='92%'
            icon='gender-male-female-variant'
            placeholder='লিঙ্গ'
            selectedItem={gender}
            onSelectItem={(g) => setGender(g)}
            items={genderLists}
          />

          <Picker
            width='92%'
            icon='card-account-details-star'
            placeholder='বৈবাহিক অবস্থা'
            selectedItem={maritalStatus}
            onSelectItem={(d) => setMaritalStatus(d)}
            items={maritalStatusLists}
          />

          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon='map-marker-radius'
            name='workplace'
            placeholder='বর্তমান ঠিকানা'
          />

          <Button
            title='Sign in'
            style={{
              marginVertical: 10,
              marginBottom: 0,
            }}
            onPress={() => navigation.navigate('StartingGuideline')}
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

export default AdditionalInformation;
