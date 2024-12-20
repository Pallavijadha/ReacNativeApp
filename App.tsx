import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './android/app/src/HomeScreen';  // Path to HomeScreen component
import SearchScreen from './android/app/src/SearchScreen';  // Path to SearchScreen component
import DetailsScreen from './android/app/src/DetailsScreen';  // Path to DetailsScreen component
import SplashScreen from './android/app/src/SplashScreen';  // Path to SplashScreen component

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator for switching between Home and Search screens
const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    {/* <Tab.Screen name="Search" component={SearchScreen} /> */}
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
