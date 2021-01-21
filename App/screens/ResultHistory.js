import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Table from '../components/Table';
import Chart from '../components/Chart';
const ResultHistory = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 15 }}>
      <Chart />
      <Table />
    </View>
  );
};

export default ResultHistory;
