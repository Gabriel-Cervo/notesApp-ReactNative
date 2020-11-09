import React, { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Home from './screens/Home';
import AddList from './screens/AddList';

import Header from './components/Header';

import usePersistentState from './utils/usePersistentState';
import { ListProvider } from './context/list';
import SubList from './screens/SubList';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  const [theme, setTheme] = usePersistentState('theme', light as DefaultTheme);

  const toggleTheme = useCallback(async () => {
    setTheme(prev => prev.name === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <ListProvider>
        <NavigationContainer>
          <Navigator initialRouteName="Home">
            <Screen
              name="Home"
              component={Home}
              options={{
                header: () => (
                  <Header
                    title="Suas Listas"
                    toggleTheme={toggleTheme}
                  />
                )
              }}
            />

            <Screen
              name="AddList"
              component={AddList}
              options={{
                header: () => (
                  <Header
                    title="Adicionar nova lista"
                    toggleTheme={toggleTheme}
                    hasCancelButton
                  />
                )
              }}
            />

            <Screen
              name="SubList"
              component={SubList}
              options={({
                header: () => (
                  <Header
                    title="Itens na lista"
                    toggleTheme={toggleTheme}
                    hasCancelButton
                  />
                )
              })}
            />

          </Navigator>
        </NavigationContainer>
      </ListProvider>
    </ThemeProvider>
  );
}