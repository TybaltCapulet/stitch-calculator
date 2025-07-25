// styles.js
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 25,
      paddingHorizontal: 40,
      backgroundColor: '#C2D2C6',
      // borderColor: 'red',
      // borderWidth: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 10,
    },
    input: {
      height: 45,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      backgroundColor: 'white',
      fontSize: 19,
    },
    pickerContainer: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      marginBottom: 10,
      ...(Platform.OS === 'ios'
        ? {
            backgroundColor: 'white',
            marginVertical: 30
          }
        : {
            backgroundColor: 'white',
            paddingHorizontal: 10,
          }),
    },
    iosPicker: {
      height: 200,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      paddingBottom: 15,
      marginBottom: 10,
      fontSize: 12
    },
    androidPicker: {
      height: 50,
      color: 'black',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'black',
      fontSize: 14,
    },
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 10,
      padding: 10,
    },
    resultText: {
      fontSize: 18,
      fontWeight: 'semibold',
      textAlign: 'center',
    },
    resultBox: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      borderColor: 'black',
      borderWidth: 1,
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      width: '60%',
      alignSelf: 'center',
      paddingVertical: 10
    },
    text: {
      fontSize: 15,
      fontWeight: 'semibold',
      paddingVertical: 5,
    },
    buttons: {
      color: 'green',
    },
    logo: {
      // width: 400,
      height: 93,
      alignSelf: 'center',
      resizeMode: 'contain'
    },
    safeAreaViewStyles: {
        backgroundColor: '#C2D2C6',
    },
    boldText: {
        fontWeight: 'bold',
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
    italic: {
      fontStyle: 'italic',
    },
    pickerfontsize: {
      fontSize: 19,
    },
    totalHoleCountCentering: {
      textAlign: 'center',
    },
    textLink: {
      color: 'blue',
    },
    sponsorsText: {
      fontSize: 12,
      alignSelf: 'center',
      marginTop: 5
    }
  });

export default styles;