import React from 'react';
import { View, Button, Image} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './HomePage';
import LengthCalculator from './LengthCalculator';
import HoleCalculator from './HoleCalculator';
import AboutPage from './AboutPage';
import styles from './styles';
import Help from './Help';
import SpiConverter from './SpiConverter';

const Drawer = createDrawerNavigator();

const App = () => {
  const CustomDrawerContent = ({ navigation }) => {
    return (
      <DrawerContentScrollView>
        {/* Your custom drawer content */}
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Calculator by Length" onPress={() => navigation.navigate('Calculate by Length')} />
        <Button title="About" onPress={() => navigation.navigate('About')} />
        <Button title="Calculate by Hole Count" onPress={() => navigation.navigate('HoleCalculator')} />
        <Button title="Help" onPress={() => navigation.navigate('Help')} />
        <Button title="SPI Converter" onPress={() => navigation.navigate('SPI Converter')} />
      </DrawerContentScrollView>
    );
  };

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Calculate by Length" component={LengthCalculator} />
        <Drawer.Screen name="Calculate By Hole Count" component={HoleCalculator} />
        <Drawer.Screen name="SPI Converter" component={SpiConverter} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="About" component={AboutPage} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
