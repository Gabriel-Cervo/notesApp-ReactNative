import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
  
      headerBackground: string;
      headerBorder: string;
  
      textOnPrimary: string;
      textOnSecondary: string;
    }
  }
}