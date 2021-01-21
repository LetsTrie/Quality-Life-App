import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopHeading = ({ heading, subHeading }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{heading}</Text>
      {subHeading && <Text style={styles.subHeaderText}>({subHeading})</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    alignSelf: 'center',
    letterSpacing: 1,
    fontWeight: '700',
  },
  subHeaderText: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
    letterSpacing: 1.2,
    fontWeight: '400',
    paddingTop: 15,
  },
});

export default TopHeading;
