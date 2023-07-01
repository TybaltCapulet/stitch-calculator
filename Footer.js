import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        Copyright: Armitage Leather Ltd {currentYear}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 3,
    flex: 1,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    flex: 1,
  },
});

export default Footer;