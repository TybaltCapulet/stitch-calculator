import React from 'react';
import { Image, TouchableOpacity, Linking, View } from 'react-native';
import { StyleSheet } from 'react-native';

const SponsorButton = ({ imageAsset, link }) => {
  const openLink = () => {
    // Open the link in the device's web browser
    Linking.openURL(link).catch((err) =>
      console.error('An error occurred', err)
    );
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.centeredButton} onPress={openLink}>
      <Image style={styles.sponsorButton} source={imageAsset} />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    sponsorButton: {
        height: 93,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10
      },
      centeredButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 93,
        resizeMode: 'contain',
      }
});

export default SponsorButton;