// AboutPage.js
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Footer from './Footer';
import { Linking } from 'react-native';

const AboutPage = () => {
    return (
            <ScrollView style={styles.container}>
                <View>
                    <Image style={styles.logo} source={require("./assets/armitageleatherlogo.png")} />
                    <Text style={styles.title}>About this app</Text>  
                    <Text>This app was created to help you calculate the necessary length of thread when saddle stitching, instead of relying on guesswork.{'\n'}</Text>
                    <Text>Nigel Armitage provided the original calculator on his website and sponsored the building of this app by Henry Rackley.{'\n'}</Text>
                    <Text>With thanks to Graham of White Star Leather who wrote the original version of the calculator for <Text style={styles.textLink} onPress={() => Linking.openURL('https://www.secretsfromtheworkshop.com')}>www.secretsfromtheworkshop.com</Text>{'\n'}</Text>
                    <Text>Please contact Armitage Leather if you have any feedback or suggestions on how to improve the app via nigel@armitageleather.com{'\n'}</Text>
                    <Text>If you would like to be kept updates about updates to this app or what’s going on at Armitage leather Ltd, why not subscribe to the newsletter.{'\n'}Follow the link to Armitage Leather Ltd to sign up:{'\n'}<Text style={styles.textLink} onPress={() => Linking.openURL('https://armitageleather.com')}>https://armitageleather.com</Text></Text>

                    <Footer />
                </View>
            </ScrollView>
      );
    };

export default AboutPage;