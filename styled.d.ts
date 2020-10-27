import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
  
      headerBackground: string;
      borderColor: string;
  
      textOnPrimary: string;
      textOnSecondary: string;
    }
  };

  export interface styledThemeType {
    theme: {
      name: string;
        
      colors: {
        primary: string;
        secondary: string;
        terciary: string;
  
        headerBackground: string;
        borderColor: string;
        
        textOnPrimary: string;
        textOnSecondary: string;
      }
    }
  };
}