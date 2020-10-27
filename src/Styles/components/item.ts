import styled from 'styled-components/native';
import { styledThemeType } from 'styled-components';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props: styledThemeType) => props.theme.colors.borderColor};
`;

export const Title = styled.Text`
  color: ${(props: styledThemeType) => props.theme.colors.textOnPrimary};
  font-size: 16px;
`;

export const EmptyView = styled.View`
  margin-right: 25px;
`;