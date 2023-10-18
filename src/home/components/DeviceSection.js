import React from 'react';
import {StyleSheet, View} from 'react-native';
import DeviceCard from './DeviceCard';

const DeviceSection = () => {
  return (
    <View style={styles.container}>
      <DeviceCard
        deviceName="Air Conditioner"
        deviceEnergyUsage="Consuming 10 kWh"
        deviceTimeUsage="3 hours 12 min"
        deviceIcon="pagelines"
      />
      <DeviceCard
        deviceName="Smart lamp"
        deviceEnergyUsage="Consuming 14 kWh"
        deviceTimeUsage="6 hours 22 min"
        deviceIcon="lightbulb-o"
      />

      <DeviceCard
        deviceName="Computer"
        deviceEnergyUsage="Consuming 18 kWh"
        deviceTimeUsage="4 hours 14 min"
        deviceIcon="desktop"
      />
      <DeviceCard
        deviceName="Laptop"
        deviceEnergyUsage="Consuming 24 kWh"
        deviceTimeUsage="9 hours 36 min"
        deviceIcon="laptop"
      />
    </View>
  );
};
export default DeviceSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 20,
    columnGap: 20,
    marginBottom: 24,
  },
});
