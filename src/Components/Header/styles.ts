import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';


export const Container = styled.View`
  padding: 24px;
  background-color: ${props => props.theme.colors.headerBackground};
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.headerBorder};

  padding-top: 44px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SwitchView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MoonIcon = styled(Feather)`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: #8fa6b3;
  font-size: 16px;
  margin-left: -35px;
`;