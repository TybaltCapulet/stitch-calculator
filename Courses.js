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
                <Text>{'\n'}In addition to this App, Armitage Leather Ltd also offers both online and face to face courses</Text>
                <Text style={styles.title}>Online Courses</Text>
                <Text>Secrets from the Workshop is a renowned online platform for the discerning leatherworker, filmed and presented by Nigel Armitage of Armitage Leather Ltd, it contains a broad host of videos to help you improve your leatherwork in a step by step style.{'\n'}
Nigel not only provides the much needed information of how to undertake a technique, but he also explains in detail why a technique is done a certain way, where else it can be used and how it is applied. {'\n'}Nigel embraces the traditional techniques whilst celebrating the modern, thereby, making leatherwork accessible and achievable for more people.{'\n'}Every level is catered for from the Beginner just starting out, to the Advanced Professional.{'\n'}
</Text>
                <OpenChannelButton/>
                <Text style={styles.title}>Face to Face Courses</Text>
                <Text>Discover The Timeless Elegance Of Handcrafted Leather in the Staffordshire based workshop of Armitage Leather Ltd.{'\n'}A place where Craftsmanship Meets Timeless Elegance. Discover the artistry and passion poured into every handcrafted piece, creating leather goods that transcend time.{'\n'}Explore your learning options and join the legacy of Leathercraft.{'\n'}{'\n'}Every level is catered for, from Beginners just starting out, to the advance professional Leatherworker.{'\n'}{'\n'}Custom Courses can be booked if you are looking to work on a specific technique, project or develop a product.{'\n'}{'\n'}</Text>
                <OpenFaceButton />
                <Footer />
                <Text></Text>
                <Text></Text>
            </View>
        </ScrollView>
  );
};

export default Courses;