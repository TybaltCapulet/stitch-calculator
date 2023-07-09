// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
      backgroundColor: 'aliceblue',
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
      marginBottom: 10,
      padding: 10,
    },
    resultText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    resultBox: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      borderColor: 'black',
      borderWidth: 1,
      margin: 10,
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
      alignSelf: 'center',
    },
    safeAreaViewStyles: {
        backgroundColor: 'aliceblue',
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
  });

export default styles;