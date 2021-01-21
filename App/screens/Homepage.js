import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Box from '../components/Homepage/Box';
import Text from '../components/Text';
import colors from '../config/colors';

const Homepage = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View>
        <View style={styles.horizontalTab}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.tab}>করোনা সম্পর্কিত তথ্য</Text>
            <Text style={styles.tab}>গুরুতর সমস্যা সম্পর্কিত তথ্য</Text>
            <Text style={styles.tab}>আত্মহত্যা পরিকল্পনা সম্পর্কিত তথ্য</Text>
            <Text style={styles.tab}>পারিবারিক সহিংসতা সম্পর্কিত তথ্য</Text>
            <Text style={styles.tab}>সন্তান পালন সম্পর্কিত তথ্য</Text>
          </ScrollView>
        </View>
        <Text style={styles.headingText}>
          আপনি কোন মানসিক রোগে ভুগছেন কিনা টা যাচাই করতে নিচে দেয়া যেকোনো টেস্ট
          করুন।
        </Text>

        <View style={styles.boxContainer}>
          <Box
            source={require('../assests/images/EatingDisorder.jpg')}
            name='Eating Disorder'
            lastScore='50/100'
            lastDate='Jan 14, 2021'
            onPress={() => navigation.navigate('AskForTest')}
          />
          <Box
            source={require('../assests/images/VideoGameAddiction.jpg')}
            name='Video Game Addiction'
            onPress={() => navigation.navigate('AskForTest')}
          />
          <Box
            source={require('../assests/images/EatingDisorder.jpg')}
            name='Eating Disorder'
            lastScore='50/100'
            lastDate='Jan 14, 2021'
            onPress={() => navigation.navigate('AskForTest')}
          />
          <Box
            source={require('../assests/images/VideoGameAddiction.jpg')}
            name='Video Game Addiction'
            onPress={() => navigation.navigate('AskForTest')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 17.5,
    marginVertical: 12,
    marginHorizontal: 15,
    lineHeight: 24,
    textAlign: 'center',
    color: '#333333',
  },
  horizontalTab: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  tab: {
    borderColor: colors.primary,
    borderWidth: 2,
    marginRight: 8,
    padding: 3,
    paddingTop: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: '#fff',
    elevation: 1,
    fontSize: 16,
    backgroundColor: colors.primary,
  },
});

export default Homepage;
