import React, { useContext, useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, NativeSyntheticEvent, Platform, TextInputChangeEventData } from 'react-native';

import { useHeaderHeight } from '@react-navigation/stack';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from 'styled-components';
import { Container, safeAreaStyle, Title, Illustration, Button } from '../Styles/screens/addList';
import { Feather } from '@expo/vector-icons';

import InputText from '../Components/InputText';

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

      <Title>Você está a um passo de se organizar melhor :)</Title>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={headerHeight + 50}
        style={{ flex: 1 }}
      >
        <InputText
          title="Digite o nome da sua nova lista"
          value={text}
          onChange={handleChange}
        />

        <BorderlessButton onPress={handleAddNewList} style={Button.borderless}>
          <Feather name="plus" size={24} color={colors.terciary} />
        </BorderlessButton>
      </KeyboardAvoidingView>
    </Container>
  );
}

export default AddList;