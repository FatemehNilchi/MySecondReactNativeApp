import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const DeviceCard = ({
  deviceIcon,
  deviceName,
  deviceEnergyUsage,
  deviceTimeUsage,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name={deviceIcon} size={42} color={'#1B9EFF'} />
        <Entypo name="switch" size={42} color={'#1B9EFF'} />
      </View>
      <Text style={styles.deviceName}>{deviceName}</Text>
      <Text style={styles.deviceInfo}>{deviceEnergyUsage}</Text>
      <Text style={[styles.deviceInfo, {color: '#FBC586'}]}>
        {deviceTimeUsage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 150,
    flex: 1,
    paddingBottom: 18,
    paddingTop: 23,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  deviceName: {
    marginBottom: 5,
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
  },
  deviceInfo: {
    marginBottom: 19,
    color: '#959696',
    fontSize: 10,
    fontWeight: '600',
  },
});

export default DeviceCard;
