import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/Text';
import { ProgressBar, RadioButton } from 'react-native-paper';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const questions = [
  {
    question: 'আপনি কি আত্মহত্যার কথা ভাবেন?',
    options: [
      {
        text: 'হ্যাঁ',
      },
      {
        text: 'না',
      },
    ],
  },
  {
    question: 'আপনি কি আত্মহত্যার কথা ভাবেন?',
    options: [
      {
        text: 'হ্যাঁ',
      },
      {
        text: 'না',
      },
    ],
  },
  {
    question: 'আপনি কি আত্মহত্যার কথা ভাবেন?',
    options: [
      {
        text: 'হ্যাঁ',
      },
      {
        text: 'না',
      },
    ],
  },
];

const Test = () => {
  const questionLength = questions.length;
  return (
    <>
      <View style={styles.quizContainer}>
        <Text style={styles.questionNumber}>Questions 1 of 6</Text>
        <ProgressBar color={colors.primary} progress={0.3} />
        <View style={styles.quizes}>
          <Text style={styles.questionText}>
            আপনি কি আত্মহত্যার কথা ভাবেন? আত্মহত্যার করার কোন পরিকল্পনা
            করেছিলেন? আগে কখনো আত্মহত্যা করার চেষ্টা করেছিলেন কি?
          </Text>

          <View>
            <View style={styles.optionContainer}>
              <Text style={styles.optionText}>হ্যাঁ</Text>
              <RadioButton
                value='first'
                status={'unchecked'}
                color={colors.primary}
              />
            </View>

            <View style={styles.optionContainer}>
              <Text style={styles.optionText}>না</Text>
              <RadioButton
                value='first'
                status={'unchecked'}
                color={colors.primary}
              />
            </View>

            <View style={styles.twoButtons}>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    padding: 18,
    paddingTop: 20,
  },
  questionNumber: {
    fontSize: 19,
    paddingBottom: 15,
    color: '#333',
  },
  quizes: {
    paddingVertical: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    marginLeft: 10,
    paddingBottom: 2,
  },
  optionText: { flex: 1, fontSize: 20, color: '#333' },
  twoButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    paddingHorizontal: 17,
    paddingVertical: 12,
    marginVertical: 14,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 17,
    letterSpacing: 0.3,
  },
  questionText: {
    fontSize: 23,
    paddingVertical: 6,
    paddingBottom: 20,
    letterSpacing: 0.5,
    lineHeight: 30,
    textAlign: 'justify',
  },
});

export default Test;
