import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screen/WelcomeScreen';
import SignupScreen from './src/screen/SignupScreen';
import LoginScreen from './src/screen/LoginScreen';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android' && SplashScreen) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 4000); 
    }
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


//const styles = StyleSheet.create({});
