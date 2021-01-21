import React, { useState } from 'react';
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Button from '../components/Button';

const AppModal = ({ modalVisible, setModalVisible }) => {
  return (
    <>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView
              style={styles.scrollViewStyle}
              showsVerticalScrollIndicator={false}
            >
              <View>
                <Text style={styles.modalHeading}>What is Depression?</Text>
                <Text style={styles.modalText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam ipsam maxime maiores minima facilis excepturi,
                  explicabo omnis consequatur reiciendis optio assumenda quaerat
                  molestias eos odio dolores ex deserunt eaque iure.
                </Text>
                <Text style={styles.modalText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam ipsam maxime maiores minima facilis excepturi,
                  explicabo omnis consequatur reiciendis optio assumenda quaerat
                  molestias eos odio dolores ex deserunt eaque iure.
                </Text>
                <Text style={styles.modalText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam ipsam maxime maiores minima facilis excepturi,
                  explicabo omnis consequatur reiciendis optio assumenda quaerat
                  molestias eos odio dolores ex deserunt eaque iure.
                </Text>
              </View>
            </ScrollView>
            <Button
              onPress={() => setModalVisible(!modalVisible)}
              title='Close'
            ></Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginBottom: 12,
  },
  modalView: {
    margin: 10,
    marginTop: 15,
    marginBottom: 30,
    padding: 30,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeading: {
    color: 'gray',
    fontSize: 30,
    paddingVertical: 10,
    paddingBottom: 25,
    alignSelf: 'center',
  },
  modalText: {
    fontSize: 16,
    lineHeight: 29,
    color: '#555',
    paddingBottom: 18,
  },
  scrollViewStyle: {
    marginBottom: 20,
  },
});

export default AppModal;
