import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.welcomeText}>Welcome Nili!</Text>
        <Text style={styles.infoText}>Always save on using Electricity</Text>
      </View>
      <FontAwesome name="user-circle-o" size={45} color={'#1B9EFF'} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 11,
  },
  infoText: {
    color: '#959696',
    fontSize: 12,
    fontWeight: '500',
  },
});
