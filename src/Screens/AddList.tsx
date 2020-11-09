import React, { useContext, useState } from 'react';
import { ImageBackground, Keyboard, NativeSyntheticEvent, Platform, TextInputChangeEventData } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/stack';

import { ThemeContext } from 'styled-components';
import { Container, safeAreaStyle, Title, Illustration, Button, KeyboardView } from '../styles/screens/addList';
import { Feather } from '@expo/vector-icons';

import InputText from '../components/InputText';

function AddList() {
  const [text, setText] = useState("");

  const { colors } = useContext(ThemeContext);

  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();


  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setText(value);
  }

  const handleAddNewList = () => {
    Keyboard.dismiss;
    navigation.navigate('Home', {
      newList: {
        title: text,
        itens: [] as Array<string>
      }
    });
  }

  return (
    <Container style={safeAreaStyle.container}>
      <ImageBackground
        style={Illustration.png}
        source={require("../assets/pngs/newListIllustration.png")}
        resizeMode='cover'

      />

      <Title>Você está a um passo de se organizar melhor</Title>

      <KeyboardView
        behavior={Platform.select({ android: undefined, ios: 'padding' })}
        keyboardVerticalOffset={Platform.select({ ios: headerHeight + 64, android: headerHeight + 200 })}
      >
        <InputText
          title="Digite o nome da sua nova lista"
          value={text}
          onChange={handleChange}
        />
        <BorderlessButton onPress={handleAddNewList} style={Button.borderless}>
          <Feather name="plus" size={24} color={colors.terciary} />
        </BorderlessButton>

      </KeyboardView>
    </Container>
  );
}

export default AddList;