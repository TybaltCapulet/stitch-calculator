// HomePage.js
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'
import Footer from './Footer';


const HomePage = () => {
  return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("./assets/armitageleatherlogo.png")} />
                <Text style={styles.title}>Calculate Thread Length When Saddle Stitching</Text>
                <Text>Dread the thought of making a stitching blunder? Calculating thread requirements can be a treacherous task - a mere mistake could spell disaster!
                {'\n'}
                {'\n'}
                Announcing the game-changer for all hand stitchers - our revolutionary App!
                {'\n'}
                Tired of grappling with thread calculations and playing the risky 'Thread Chicken' game? Fear no more! With this powerful tool, you can bid farewell to uncertainties and confidently stitch your way to perfection.
                {'\n'}
                {'\n'}
                A battle-tested and reliable solution to all your stitching woes. Previously a downloadable resource, now you have a powerful new tool at your disposal - an actual App!
                {'\n'}
                This wonder will effortlessly calculate your thread needs, ensuring you never miss the mark again.
                {'\n'}
                No more guesswork - simply input your numbers and let the magic unfold. With just a few clicks, this app offers options to compute thread length based on either the length to be stitched or the hole count.
                {'\n'}
                Embrace the certainty and bid farewell to stitching guesswork!
                {'\n'}
                </Text>
                <Text style={styles.italic}>I hope it helps
                {'\n'}
                {'\n'}
                Nigel
                </Text>
                <Footer />
            </View>
        </ScrollView>
  );
};

export default HomePage;