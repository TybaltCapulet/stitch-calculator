import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'
import OpenChannelButton from './OpenChannelButton';
import Footer from './Footer';
import OpenFaceButton from './openFaceButton';


const Courses = () => {
  return (
        <ScrollView style={styles.container}>
            <View>
                <Image style={styles.logo} source={require("./assets/secretslogo.png")} />
                <Text style={styles.title}>Online Courses</Text>
                <Text>Secrets from the Workshop is a dedicated channel on for the discerning leatherworker. {'\n'}It contains a host of videos to help you improve your leatherwork in a step by step style.{'\n'}{'\n'}
Nigel not only provides the much needed information of how to undertake a technique, but he also explains in detail why a technique is done a certain way, where else it can be used and how it is applied. {'\n'}{'\n'}
Nigel embraces the traditional techniques whilst celebrating the modern, thereby, making leatherwork accessible and achievable for more people.{'\n'}
</Text>
                <OpenChannelButton/>
                <Text style={styles.title}>Face to Face Courses</Text>
                <Text>In addition to the online channel, Nigel also offers face to face courses in his Staffordshire workshop.{'\n'}{'\n'}Every level is catered for from Beginners just starting out, to the advanced professional Leatherwork.{'\n'}{'\n'}Specific courses can be booked which range from Belts to Boxes.{'\n'}{'\n'}Custom courses can also be booked if you are looking at working on a specific technique or looking at development of a product.{'\n'}</Text>
                <OpenFaceButton />
                <Footer />
                <Text></Text>
                <Text></Text>
            </View>
        </ScrollView>
  );
};

export default Courses;