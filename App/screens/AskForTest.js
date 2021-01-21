import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, View, StyleSheet } from 'react-native';
import Text from '../components/Text';
import Button from '../components/Button';
import colors from '../config/colors';
import AppModal from '../components/Modal';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const AskForTest = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assests/images/ReadyForTest.jpg')}
          style={{ height: '100%', width: '100%' }}
        >
          <LinearGradient
            colors={['#525252', '#757575']}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.linearGradientStyle}
          ></LinearGradient>

          <View style={styles.container}>
            <View>
              <Text style={styles.headingText}>Depression Test</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.descriptionText}>
                This is a 9 question test for diagnosing, monitoring, and
                measuring the severity of depression.
              </Text>
            </View>
            <View>
              <Button title='Take Test' />
              <Button
                title='See History'
                onPress={() => navigation.navigate('ResultHistory')}
              />
              <TouchableOpacity
                style={styles.aboutDesc}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.aboutDescText}>About Depression</Text>
              </TouchableOpacity>
              <AppModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradientStyle: {
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
  },
  headingText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    letterSpacing: 0.2,
    fontWeight: '700',
  },
  descriptionText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    letterSpacing: 0.2,
    fontWeight: '700',
    lineHeight: 33,
  },
  aboutDesc: {
    alignItems: 'center',
    paddingTop: 10,
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    color: '#f8f1f1',
  },
  aboutDescText: {
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    color: '#f8f1f1',
  },
});

export default AskForTest;
