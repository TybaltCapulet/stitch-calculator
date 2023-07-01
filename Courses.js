import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'
import OpenLinkButton from './OpenLinkButton';
import Footer from './Footer';


const Courses = () => {
  return (
        <ScrollView style={styles.container}>
            <View>
                <Image style={styles.logo} source={require("./assets/secretslogo.png")} />
                <Text style={styles.title}>Secrets From The Workshop Courses</Text>
                <Text>Secrets from the Workshop is a dedicated instruction channel on Leathercraft for the discerning leatherworker. {'\n'}{'\n'}Filmed and presented by Nigel Armitage of Armitage Leather, it contains a host of videos to help you improve your leatherwork in a step by step style.
Nigel not only provides the much needed information of how to undertake a technique, but he also explains in detail why a technique is done a certain way, where else it can be used and how it is applied. {'\n'}{'\n'}
Nigel embraces the traditional techniques whilst celebrating the modern, thereby, making leatherwork accessible and achievable for more people.{'\n'}{'\n'}
Every level is catered for from Beginners just starting out, to the advanced Professional Leatherworker. {'\n'}</Text>
                <OpenLinkButton/>
                <Footer />
            </View>
        </ScrollView>
  );
};

export default Courses;