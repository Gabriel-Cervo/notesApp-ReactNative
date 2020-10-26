import React, { useState, useCallback } from 'react';

import { ThemeProvider } from 'styled-components';
import light from './Styles/themes/light';
import dark from './Styles/themes/dark';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import Header from './Components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(prevState => prevState.name === 'light' ? dark : light);
  }, []);
     
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