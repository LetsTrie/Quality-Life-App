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
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import { Dimensions } from 'react-native';
import colors from '../config/colors';
const screenWidth = Dimensions.get('window').width * 0.99;
const tableData = [];
for (let i = 0; i < 30; i += 1) {
  const rowData = [];
  rowData.push('January 16, 2021');
  rowData.push('11:21 PM');
  rowData.push('25/100');
  tableData.push(rowData);
}
const tableHead = ['Date', 'Time', 'Score'];
const widthArr = [140, 90, 90];
const AppTable = () => {
  return (
    <View style={[styles.container]}>
      <ScrollView horizontal={true}>
        <View style={{ backgroundColor: 'green', width: '100%' }}>
          <Table
            borderStyle={{
              borderWidth: 1,
              borderColor: '#C1C0B9',
            }}
          >
            <Row
              data={tableHead}
              style={styles.header}
              textStyle={[
                styles.text,
                { color: 'white', fontWeight: '700', fontSize: 16 },
              ]}
              widthArr={widthArr}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  style={[
                    styles.row,
                    index % 2 && { backgroundColor: '#cadefc' },
                  ]}
                  textStyle={styles.text}
                  widthArr={widthArr}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: { height: 45, backgroundColor: '#ea5455' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#defcf9' },
});

export default AppTable;
