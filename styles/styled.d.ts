import 'styled-components';

declare module 'styled-components' {
  export interface Default {
    colors: {
      main: string;
      darkGrey: string;
      lightGrey: string;
    };
  }
}
