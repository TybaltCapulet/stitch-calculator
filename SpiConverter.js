//SPI Converter

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SPItoMMTable = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>The SPI to millimetres is simple enough to find out by looking at your irons if they are modern. {'\n'}{'\n'}
If you are stitching at 7 stitches per inch (SPI), the stitch length will be 3.85mm, this is the distance from centre of hole to centre of hole. {'\n'}{'\n'}
If you are stitching at 10 SPI your Stitch Size will be 2.7mm.{'\n'}{'\n'}

If however, you find your irons are not marked, here is a small guide to assist:{'\n'}</Text>
      <View style={styles.tableRow}>
        <Text style={styles.headerCell}>SPI</Text>
        <Text style={styles.headerCell}>Stitch Size (mm)</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.cell}>5</Text>
        <Text style={styles.cell}>5.2mm</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.cell}>6</Text>
        <Text style={styles.cell}>4.3mm</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.cell}>7</Text>
        <Text style={styles.cell}>3.85mm</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.cell}>8</Text>
        <Text style={styles.cell}>3.38mm</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.cell}>9</Text>
        <Text style={styles.cell}>3mm</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.cell}>10</Text>
        <Text style={styles.cell}>2.7mm</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.cell}>11</Text>
        <Text style={styles.cell}>2.45mm</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.cell}>12</Text>
        <Text style={styles.cell}>2.3mm</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    backgroundColor: 'aliceblue',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerCell: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  cell: {
    fontSize: 16,
    flex: 1,
  },

});

export default SPItoMMTable;