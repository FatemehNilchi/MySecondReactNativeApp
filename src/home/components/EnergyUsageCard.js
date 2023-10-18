import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const EnergyUsageCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Energy Usage</Text>
      <View style={styles.dateContainer}>
        <Entypo name="calendar" size={20} color={'#62B6F3'} />
        <Text style={styles.dateText}>6 Apr 2022</Text>
        <Entypo name="chevron-down" size={20} color={'#62B6F3'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingBottom: 25,
    paddingTop: 20,
    paddingLeft: 24,
    paddingRight: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  label: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: '#959696',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 8,
  },
});

export default EnergyUsageCard;
