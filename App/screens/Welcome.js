import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '../components/Text';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assests/images/intro_image.jpg')}
        ></Image>
      </View>
      <>
        <Text style={styles.headerText}>Quality life</Text>
        <Text style={styles.subHeaderText}>
          মানসিক স্বাস্থ্য সম্পর্কিত যেকোনো ধরনের তথ্য এবং বিভিন্ন টেস্ট আপনি এই
          অ্যাপ থেকে পাবেন। বিভিন্ন চিকিৎসক এবং স্বাস্থ্যকেন্দ্রে আপনি এই
          অ্যাপটি থেকে যোগাযোগ করতে পারবেন।
        </Text>
        <View>
          <Button
            title='Sign in'
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title='Create an account'
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  image: {
    maxWidth: '98%',
    height: '100%',
  },
  headerText: {
    fontSize: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#2d4059',
    paddingBottom: 10,
    marginTop: 8,
  },
  subHeaderText: {
    width: '85%',
    alignSelf: 'center',
    fontSize: 15,
    color: '#7d9bbd',
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 0.1,
    fontWeight: '300',
    paddingBottom: 20,
  },
});

export default Welcome;
