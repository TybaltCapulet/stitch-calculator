import React from 'react';
import { View, Button, Image} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './HomePage';
import LengthCalculator from './LengthCalculator';
import AboutPage from './AboutPage';
import styles from './styles';

const Drawer = createDrawerNavigator();

const App = () => {
  const CustomDrawerContent = ({ navigation }) => {
    return (
      <DrawerContentScrollView>
        {/* Your custom drawer content */}
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Calculator" onPress={() => navigation.navigate('Calculator')} />
        <Button title="About" onPress={() => navigation.navigate('About')} />
      </DrawerContentScrollView>
    );
  };

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Calculator" component={LengthCalculator} />
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
