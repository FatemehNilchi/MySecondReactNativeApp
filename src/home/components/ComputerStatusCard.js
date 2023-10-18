import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const ComputerStatusCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your Computer is not used,</Text>
        <Text style={styles.text}>turn off to save electricity</Text>
      </View>
      <CustomButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 32,
    paddingBottom: 21,
    paddingTop: 21,
    paddingLeft: 21,
    paddingRight: 21,
    borderRadius: 20,
    backgroundColor: '#F16E25',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ComputerStatusCard;
