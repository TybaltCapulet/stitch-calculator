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
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
});

export default Footer;