import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Text from './Text';

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    paddingBottom: 16,
    borderBottomColor: '#c9d6df',
    borderBottomWidth: 1.2,
    paddingLeft: 13,
    color: '#2b2e4a',
    fontSize: 18.5,
  },
});

export default PickerItem;
