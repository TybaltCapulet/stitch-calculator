//help.js
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'
import Footer from './Footer';



const HomePage = () => {
  return (
        <ScrollView style={styles.container}>
            <View>
                <Image style={styles.logo} source={require("./assets/secretslogo.png")} />
                <Text style={styles.title}>Need some help?</Text>
                <Text>Below are some definitions to help you use the calculator{'\n'}</Text>
                <Text><Text style={styles.boldText}>Total Length of Stitching: </Text>{'\n'}The total length that you are planning to stitch, from the first hole, to the last. If straight, this measurement can be obtained with a rule.{'\n'}</Text>
                <Text><Text style={styles.boldText}>SPI: </Text>{'\n'}SPI or Stitches Per Inch is a measure of how many holes you stitch per inch, with the equal conversion to milimeters. The SPI to millimetres is simple enough to find out by looking at your irons if they are modern.

                If you are stitching at 7 stitches per inch (SPI), the stitch length will be 3.85mm, this is the distance from centre of hole to centre of hole.
                If you are stitching at 10 SPI your Stitch Size will be 2.7mm. There is a guide on this app to work out the SPI from your irons. You can find this in the menu under 'SPI Converter'.{'\n'}</Text>
                <Text><Text style={styles.boldText}>Hole Count:</Text> The number of holes in total you will be stitching, you can count this up by simply counting the number of holes you're planning to stitch.{'\n'}</Text>
                <Text><Text style={styles.boldText}>Thickness of Item to be stitched: </Text>The total thickness of the leather items you are stitching together in milimeters, for example, if you are stitching two pieces of leather together that are 1.5mm each, the total inputted into the calculator would be 3mm. {'\n'}</Text>
                <Text><Text style={styles.boldText}>Length of Finish Thread: </Text>The amount of thread to ensure you have enough to finish comfortably and do any backstitching. The calculator has a default of 200mm which is good for most applications, but you can change this to anything you want. {'\n'}</Text>            
                <Footer />
                <Text></Text>  
                <Text></Text>   
            </View>
        </ScrollView>
  );
};

export default HomePage;