// HoleCalculatorPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import Footer from './Footer';
import CustomButton from './CustomButton';
import CustomPicker from './CustomPicker';

const HoleCalculator = () => {
    const [totalLength, setTotalLength] = useState('');
    const [holeCount, setHoleCount] = useState('');
    const [stitchSize, setStitchSize] = useState('3.85');
    const [itemThickness, setItemThickness] = useState('');
    const [finishThreadLength, setFinishThreadLength] = useState('');
    const [totalThreadLength, setTotalThreadLength] = useState('');
    
    const calculateHoleCount = () => {
    if (!holeCount || !itemThickness) {
        Alert.alert('Oops', 'Please provide values for Hole Count and Item Thickness.');
        return;
    }
      const parsedSPI = parseFloat(stitchSize);
      const parsedThickness = parseFloat(itemThickness);
      const parsedHoleCount = parseFloat(holeCount);
      const parsedFinishThreadLength = finishThreadLength === '0' ? 0 : parseFloat(finishThreadLength) || 200;
      const length = parsedHoleCount * parsedSPI;
      const hiddenLength = parsedHoleCount * parsedThickness;
      const threadLength = (length + hiddenLength + parsedFinishThreadLength) * 2;
      setTotalThreadLength(Math.round(threadLength).toString() + 'mm' );
    };
  
  
    return (
        <ScrollView style={styles.container}>
          <View>
            <Image style={styles.logo} source={require("./assets/armitageleatherlogo.png")} />
            <Text style={styles.title}>Thread Length Calculator</Text>
            <Text style={styles.text}>Hole Count (Number of Stitch Holes)</Text>
            <TextInput style={styles.input} placeholder="Hole Count" value={holeCount} onChangeText={setHoleCount} keyboardType="numeric" />
            <Text style={styles.text}> SPI (mm)</Text>
            <Picker style={Platform.OS === 'ios' ? styles.iosPicker : styles.androidPicker} selectedValue={stitchSize} onValueChange={setStitchSize}>
              <Picker.Item style={styles.pickerfontsize} label="5 (5.2mm)" value="5.2" />
              <Picker.Item style={styles.pickerfontsize} label="6 (4.3mm)" value="4.3" />
              <Picker.Item style={styles.pickerfontsize} label="7 (3.85mm)" value="3.85" />
              <Picker.Item style={styles.pickerfontsize} label="8 (3.38mm)" value="3.38" />
              <Picker.Item style={styles.pickerfontsize} label="9 (3mm)" value="3" />
              <Picker.Item style={styles.pickerfontsize} label="10 (2.7mm)" value="2.7" />
              <Picker.Item style={styles.pickerfontsize} label="11 (2.45mm)" value="2.45" />
              <Picker.Item style={styles.pickerfontsize} label="12 (2.3mm)" value="2.3" />
            </Picker>
            <Text style={styles.text}>Thickness of Item to be Stitched</Text>
            <TextInput style={styles.input} placeholder="Thickness of Item to be Stitched (mm)" value={itemThickness} onChangeText={setItemThickness} keyboardType="numeric"/>
            <Text style={styles.text}>Length of Finishing Thread (mm)</Text>
            <TextInput style={styles.input} value={finishThreadLength} onChangeText={setFinishThreadLength} placeholder="200mm (default)" defaultValue="200" keyboardType="numeric"/>
            <View style={styles.buttonContainer}>
              <CustomButton title="Calculate Based on Hole Count" onPress={calculateHoleCount} />
            </View>
            <Text style={styles.resultText}>Total Thread Length Needed:</Text>
            <Text style={styles.resultBox}> {totalThreadLength} </Text>
            <Footer />
            <Text></Text>
            <Text></Text>
          </View>
        </ScrollView>
    );
  };
  
  
  export default HoleCalculator;
  