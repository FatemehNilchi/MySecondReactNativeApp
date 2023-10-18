import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
const UsageInfoCycle = ({icon, iconPack, iconColor, cycleName, cycleUsage}) => {
  const IconPack = iconPack === 'FontAwesome5' ? FontAwesome5 : Ionicons;
  const IconColor = iconColor === '#5781D3' ? '#5781D3' : '#FF8A00';
  return (
    <View style={styles.infoContainer}>
      <View style={styles.iconContainer}>
        <IconPack name={icon} size={24} color={IconColor} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{cycleName}</Text>
        <Text style={styles.value}>{cycleUsage}</Text>
      </View>
    </View>
  );
};

const UsageInfoCard = () => {
  return (
    <View style={styles.container}>
      <UsageInfoCycle
        icon="plug"
        cycleName="Today"
        cycleUsage="33.6 kWh"
        iconPack="FontAwesome5"
        iconColor={'#5781D3'}
      />
      <UsageInfoCycle
        icon="flash"
        cycleName="The Month"
        cycleUsage="340.6 kWh"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 37,
    paddingBottom: 26,
    paddingTop: 23,
    paddingLeft: 43,
    paddingRight: 43,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    rowGap: 11,
  },
  label: {
    color: '#959696',
    fontSize: 12,
    fontWeight: '600',
  },
  value: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default UsageInfoCard;
