// HomePage.js
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'
import Footer from './Footer';


const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("./assets/secretslogo.png")} />
                <Text style={styles.title}>Calculate Thread Length When Saddle Stitching</Text>
                <Text>Calculating the amount of thread you need when Saddle Stitching to be able to stitch a specific item correctly can be problematic, and if you get it wrong, disastrous.
                {'\n'}
                {'\n'}
                    Advice that is often given ranges from x4 to x10 often with little consideration of what SPI is being used or the thickness of the item being stitched.
                {'\n'}
                {'\n'}
                    It seems to be mostly guesswork, which is never a good thing. So some years ago, I created a simple formula to help you avoid that most horrendous of games… ‘Thread Chicken’. Never Run Out Again!
                    {'\n'}
                    {'\n'}
                    This is a much used, tried, tested and above all reliable method to help you with your stitching.
                    {'\n'}
                    {'\n'}
                    It has been available on Nigel Armitage’s website for some time as a free download and still is.
                    Now you have a new option, an actual calculator, one that will help you get the correct thread length, every time!
                    All you need to do is to put in your numbers. Simply click on the menu on this app and choose whether to calculate by stitch length or number of holes</Text>
                <Footer />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;