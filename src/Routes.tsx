import React, { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './Styles/themes/light';
import dark from './Styles/themes/dark';

import Home from './Screens/Home';
import Header from './Components/Header';

import usePersistentState from './utils/usePersistentState';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  const [theme, setTheme] = usePersistentState('theme', light as DefaultTheme);

  const toggleTheme = useCallback(async () => {
    setTheme(prev => prev.name === 'light' ?  dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
          <Navigator initialRouteName="Home">
            <Screen 
              name="Home" 
              component={Home} 
              options={{
                header: () => <Header title="Suas Listas" toggleTheme={toggleTheme}/>
              }}
            />
          </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}