import { styledThemeType } from 'styled-components';
import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  padding: 24px;
  background-color: ${(props: styledThemeType) => props.theme.colors.headerBackground};
  border-bottom-width: 1px;
  border-bottom-color: ${(props: styledThemeType) => props.theme.colors.borderColor};

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
  color: ${(props: styledThemeType) => props.theme.colors.terciary};
  font-size: 16px;
  margin-left: -70px;
`;