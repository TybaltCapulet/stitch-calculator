import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Calculator = () => {
  const [totalLength, setTotalLength] = useState('');
  const [holeCount, setHoleCount] = useState('');
  const [stitchSize, setStitchSize] = useState('5');
  const [itemThickness, setItemThickness] = useState('');
  const [finishThreadLength, setFinishThreadLength] = useState('');
  const [totalThreadLength, setTotalThreadLength] = useState('');

  const calculateLength = () => {
    const parsedLength = parseFloat(totalLength);
    const parsedSPI = parseFloat(stitchSize);
    const parsedThickness = parseFloat(itemThickness);
    const parsedFinishThreadLength = parseFloat(finishThreadLength);
    const holeCount = Math.round(parsedLength / parsedSPI);
    const hiddenLength = holeCount * parsedThickness;
    const threadLength = (parsedLength + hiddenLength + parsedFinishThreadLength) * 2;
    setTotalThreadLength(Math.round(threadLength).toString() + 'mm');
  };

  const calculateHoleCount = () => {
    const parsedSPI = parseFloat(stitchSize);
    const parsedThickness = parseFloat(itemThickness);
    const parsedHoleCount = parseFloat(holeCount);
    const parsedFinishThreadLength = parseFloat(finishThreadLength);
    const length = parsedHoleCount * parsedSPI;
    const hiddenLength = parsedHoleCount * parsedThickness;
    const threadLength = (length + hiddenLength + parsedFinishThreadLength) * 2;
    setTotalThreadLength(Math.round(threadLength).toString());
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.logo} source={require("./assets/secretslogo.png")} />
          <Text style={styles.title}>Thread Length Calculator</Text>
          <Text style={styles.text}>Total Length of Stitching</Text>
          <TextInput style={styles.input} placeholder="Total Length of Stitching (mm)" value={totalLength} onChangeText={setTotalLength} />
          <Text style={styles.text}>Hole Count</Text>
          <TextInput style={styles.input} placeholder="Hole Count" value={holeCount} onChangeText={setHoleCount} />
          <Text style={styles.text}> SPI (mm)</Text>
          <Picker style={styles.picker} selectedValue={stitchSize} onValueChange={setStitchSize}>
            <Picker.Item label="5 (5.2mm)" value="5.2" />
            <Picker.Item label="6 (4.3mm)" value="4.3" />
            <Picker.Item label="7 (3.85mm)" value="3.85" />
            <Picker.Item label="8 (3.38mm)" value="3.38" />
            <Picker.Item label="9 (3mm)" value="3" />
            <Picker.Item label="10 (2.7mm)" value="2.7" />
            <Picker.Item label="11 (2.45mm)" value="2.45" />
            <Picker.Item label="12 (2.3mm)" value="2.3" />
          </Picker>
          <Text style={styles.text}>Thickness of Item to be Stitched</Text>
          <TextInput style={styles.input} placeholder="Thickness of Item to be Stitched (mm)" value={itemThickness} onChangeText={setItemThickness} />
          <Text style={styles.text}>Length of Finishing Thread (mm)</Text>
          <TextInput style={styles.input} value={finishThreadLength} onChangeText={setFinishThreadLength} placeholder="200" defaultValue="200"/>
          <View style={styles.buttonContainer}>
            <Button marginBottom='20px' color="green" title="Calculate Based on Length" onPress={calculateLength} />
            <Button title="Calculate Based on Hole Count" onPress={calculateHoleCount} />
          </View>
          <Text style={styles.resultText}>Total Thread Length Needed: {totalThreadLength}</Text>
          <Text style={styles.title}>Thread Length Calculator</Text>
          <Text style={styles.title}>Thread Length Calculator</Text>
          <Text style={styles.title}>Thread Length Calculator</Text>
          <Text style={styles.title}>Thread Length Calculator</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'aliceblue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  picker: {
    height: 50,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 10,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttons: {
    color: 'green',
  },
  logo: {
    width: 300,
    height: 120,
  }
});

export default Calculator;
