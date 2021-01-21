import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './App/components/Screen';
import Welcome from './App/screens/Welcome';
import Login from './App/screens/Login';
import Register from './App/screens/Register';
import Homepage from './App/screens/Homepage';
import LoginPro from './App/screens/pro/LoginPro';
import RegisterPro from './App/screens/pro/RegisterPro';
import colors from './App/config/colors';
import AskForTest from './App/screens/AskForTest';
import ResultHistory from './App/screens/ResultHistory';
import AdditionalInformation from './App/screens/AdditionalInformation';
import StartingGuideline from './App/screens/StartingGuideline';
import Test from './App/screens/Test';

const Stack = createStackNavigator();

let options = { headerShown: false };

export default function App() {
  return (
    <Screen>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Test'
          screenOptions={{
            headerStyle: { backgroundColor: colors.primary, height: 60 },
            headerTitleStyle: {
              alignSelf: 'center',
              color: colors.white,
              fontSize: 21,
            },
          }}
        >
          <Stack.Screen name='Welcome' component={Welcome} options={options} />
          <Stack.Screen name='Login' component={Login} options={options} />
          <Stack.Screen
            name='Register'
            component={Register}
            options={options}
          />
          <Stack.Screen
            name='LoginPro'
            component={LoginPro}
            options={options}
          />
          <Stack.Screen
            name='RegisterPro'
            component={RegisterPro}
            options={options}
          />
          <Stack.Screen
            name='AdditionalInformation'
            component={AdditionalInformation}
            options={options}
          />
          <Stack.Screen
            name='StartingGuideline'
            component={StartingGuideline}
            options={({ navigation }) => ({
              title: 'Quality Life',
              headerLeft: null,
            })}
          />
          <Stack.Screen
            name='Homepage'
            component={Homepage}
            options={({ navigation }) => ({
              title: 'Quality Life',
              headerLeft: null,
            })}
          />
          <Stack.Screen
            name='Test'
            component={Test}
            options={({ navigation }) => ({
              title: 'পারিবারিক সহিংসতা',
              headerLeft: null,
            })}
          />
          <Stack.Screen
            name='AskForTest'
            component={AskForTest}
            options={options}
          />
          <Stack.Screen
            name='ResultHistory'
            component={ResultHistory}
            options={({ navigation }) => ({
              title: 'Result History',
              headerLeft: null,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Screen>
  );
}
