// AboutPage.js
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const AboutPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require("./assets/secretslogo.png")} />
                    <Text style={styles.title}>Calculate Thread Length When Saddle Stitching</Text>  
                    <Text>Calculate How much Thread you need when Saddle Stitching. Never run out again. However long or thick your item is.</Text>
                    <Text>Calculating the amount of thread you need when Saddle Stitching to be able to stitch a specific item correctly can be problematic, and if you get it wrong, disastrous.
                    {'\n'}
                        Advice that is often given ranges from x4 to x10 often with little consideration of what SPI is being used or the thickness of the item being stitched.
                    {'\n'}
                        It seems to be mostly guesswork, which is never a good thing. So some years ago, I created a simple formula to help you avoid that most horrendous of games… ‘Thread Chicken’. Never Run Out Again!
                        {'\n'}
                        This is a much used, tried, tested and above all reliable method to help you with your stitching.
                        {'\n'}
                        It has been available on Nigel Armitage’s website for some time as a free download and still is.
                        Now you have a new option, an actual calculator, one that will help you get the correct thread length, every time!
                        All you need to do is to put in your numbers.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
      );
    };

export default AboutPage;