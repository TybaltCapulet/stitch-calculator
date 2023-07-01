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
    paddingTop: 10,
    paddingBottom: 3,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
});

export default Footer;