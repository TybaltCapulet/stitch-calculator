// AboutPage.js
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Footer from './Footer';

const AboutPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require("./assets/secretslogo.png")} />
                    <Text style={styles.title}>About this app</Text>  
                    <Text>This app was created to help people calculate the necessary length of thread when saddle stitching, instead of relying on guesswork.{'\n'}</Text>
                    <Text>Nigel Armitage provided the original calculator on his website and sponsored the building of this app by Henry Rackley.{'\n'}</Text>
                    <Text>With thanks to Graham of White Star Leather who wrote the original version of the calculator in Jquery on secretsfromtheworkshop.com{'\n'}</Text>
                    <Text>Please contact Armitage Leather if you have any feedback or suggestions on how to improve the app via nigel@armitageleather.com{'\n'}</Text>
                    <Footer />
                </View>
            </ScrollView>
        </SafeAreaView>
      );
    };

export default AboutPage;