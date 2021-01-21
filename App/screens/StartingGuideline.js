import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Text from '../components/Text';
import YouTube from '../components/Youtube';
import Button from '../components/Button';

const StartingGuideline = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState();
  const [quality, setQuality] = useState();
  const [error, setError] = useState();
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ব্যবহারিক নির্দেশিকা</Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.descText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          voluptatem ad dolore ut, nihil laudantium quidem, rem atque distinctio
          nobis ex aliquam saepe, quam maxime quia dolorum magni! Qui, dolorem.
        </Text>
        <Text style={styles.descText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          voluptatem ad dolore ut, nihil laudantium quidem, rem atque distinctio
          nobis ex aliquam saepe, quam maxime quia dolorum magni! Qui, dolorem.
        </Text>
        <Text style={styles.descText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          voluptatem ad dolore ut, nihil laudantium quidem, rem atque distinctio
          nobis ex aliquam saepe, quam maxime quia dolorum magni! Qui, dolorem.
        </Text>
        <Text style={styles.descText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          voluptatem ad dolore ut, nihil laudantium quidem, rem atque distinctio
          nobis ex aliquam saepe, quam maxime quia dolorum magni! Qui, dolorem.
        </Text>
        <Text style={styles.descText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          voluptatem ad dolore ut, nihil laudantium quidem, rem atque distinctio
          nobis ex aliquam saepe, quam maxime quia dolorum magni! Qui, dolorem.
        </Text>
      </View>
      <YouTube />
      <Button
        title='Redirect to Homepage'
        style={{ marginTop: 0, marginBottom: 25 }}
        onPress={() => navigation.navigate('Homepage')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingTop: 18,
    paddingBottom: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30.5,
    color: '#666',
  },
  desc: {
    paddingHorizontal: 15,
  },
  descText: {
    fontSize: 16.5,
    lineHeight: 27,
    color: '#555',
    paddingBottom: 15,
  },
});

export default StartingGuideline;
