import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

let borderRadius = 35;

const AuthIcon = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../../assests/images/red_logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    paddingBottom: borderRadius * 0.9,
    paddingTop: borderRadius * 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 260,
    height: 85,
  },
});

export default AuthIcon;
