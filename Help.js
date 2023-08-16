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
                <Image style={styles.logo} source={require("./assets/armitageleatherlogo.png")} />
                <Text style={styles.title}>Need some help?</Text>
                <Text>Below are some definitions to help you use the calculator{'\n'}</Text>
                <Text><Text style={styles.boldText}>Total Length of Stitching: </Text>{'\n'}The total length that you are planning to stitch, from the first hole, to the last. If straight, this measurement can be obtained with a rule.{'\n'}</Text>
                <Text><Text style={styles.boldText}>SPI: 'Stitches per inch'</Text>{'\n'}This is a measurement used in saddle stitching to define how many stitches per inch you want. 6spi is a large stitch, 12spi is a fine stitch.{'\n'}Check out the SPI converter for more information.{'\n'}</Text>
                <Text><Text style={styles.boldText}>Hole Count:</Text>{'\n'}If you are pre-pricking your leather and it is a complex shape, you can use your hole count to calculate the thread length.{'\n'}</Text>
                <Text><Text style={styles.boldText}>Thickness of item to be stitched: </Text>{'\n'}This the total of all layers that are be stitched together.{'\n'}If you are stitching 4 layers of 1.5mm leather, your total will be 6mm, this is what you put into the calculator in the thickness box.{'\n'}</Text>
                <Text><Text style={styles.boldText}>Length of finishing thread: </Text>{'\n'}At the end of the row of stitching, you will need enough thread left over to be able to finish your item with backstitches and the like.{'\n'}This is defaulted to 200mm for each thread. You can by all means add more.{'\n'}This is a good idea if you pierce the thread a lot and have to keep snipping off your needles to fix. This can shorten the thread.{'\n'}</Text>
                <Text><Text style={styles.boldText}>Remember!</Text>{'\n'}This is an exact guide  designed to give you the minimum amount of thread you need to stitch. Always add a little more for safety and mistakes.{'\n'}</Text>          
                <Footer />
                <Text></Text>  
                <Text></Text>   
            </View>
        </ScrollView>
  );
};

export default HomePage;