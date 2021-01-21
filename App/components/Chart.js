import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Text from '../components/Text';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import { Dimensions } from 'react-native';
import colors from '../config/colors';
const screenWidth = Dimensions.get('window').width * 0.99;
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 1,
  decimalPlaces: 2, // optional, defaults to 2dp
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ff2e63',
  },
  propsForLabels: {
    fontSize: 12.5,
  },
  fillShadowGradient: colors.primary,
  fillShadowGradientOpacity: 0.5,
};
const data = [
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
];
const labels = [
  '01/01',
  '02/01',
  '03/01',
  '04/01',
  '05/01',
  '06/01',
  '07/01',
  '08/01',
  '09/01',
  '10/01',
  '11/01',
  '12/01',
  '13/01',
  '14/01',
  '15/01',
];

function ingoreIndex(len) {
  if (len <= 6) return [];
  let idx = [];
  let ignore = len - 1;
  for (let i = len - 1; i >= 0; i--) {
    if (i === ignore) {
      ignore = ignore - Math.ceil(len / 5);
      continue;
    }
    idx.push(i);
  }
  return idx;
}

const AppChart = () => {
  return (
    <LineChart
      data={{
        labels: labels,
        datasets: [
          {
            data,
          },
        ],
      }}
      width={screenWidth} // from react-native
      height={280}
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={chartConfig}
      bezier
      style={{
        marginTop: 10,
        paddingRight: 55,
      }}
      xLabelsOffset={-3}
      hidePointsAtIndex={ingoreIndex(data.length)}
    />
  );
};

export default AppChart;
