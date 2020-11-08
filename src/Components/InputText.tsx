import React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Container, Title, Input } from '../styles/components/inputText';

interface PropTypes {
  title: string;
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

function InputText({ title, value = "", onChange}: PropTypes) {
  return (
    <Container>
      <Title>{title}</Title>
      
      <Input
        value={value}
        onChange={onChange}
      />
    </Container>
  )
}

export default InputText;