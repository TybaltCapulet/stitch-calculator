import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const CustomPicker = ({ options, selectedValue, onValueChange }) => {
  return (
    <View style={styles.container}>
      <ModalDropdown
        style={styles.dropdown}
        dropdownStyle={styles.dropdownStyle}
        textStyle={styles.dropdownText}
        dropdownTextStyle={styles.dropdownTextStyle}
        options={options}
        defaultValue={selectedValue}
        onSelect={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dropdown: {
    flex: 1,
  },
  dropdownStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '100%',
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownTextStyle: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default CustomPicker;