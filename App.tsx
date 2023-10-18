import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './src/home/components/Header';
import EnergyUsageCard from './src/home/components/EnergyUsageCard';
import UsageInfoCard from './src/home/components/UsageInfoCard';
import ComputerStatusCard from './src/home/components/ComputerStatusCard';
import DeviceSection from './src/home/components/DeviceSection';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <EnergyUsageCard />
        <UsageInfoCard />
        <ComputerStatusCard />

        <View style={styles.deviceSectionHeader}>
          <Text style={styles.deviceSectionHeaderText}>My Device</Text>
          <Text
            style={[
              styles.deviceSectionHeaderText,
              {color: '#1B9EFF', fontSize: 12},
            ]}>
            Add Device
          </Text>
        </View>

        <DeviceSection />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    paddingTop: 51,
    paddingLeft: 20,
    paddingRight: 20,
  },
  deviceSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  deviceSectionHeaderText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default App;
