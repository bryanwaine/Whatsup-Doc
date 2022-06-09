import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    regular: {
      fontSize: '0.9rem',
      fontWeight: '200',
      textAlign: 'center',
      margin: '10px 30px',
      color: '#000000',
    },
    medium: {
      fontSize: '1rem',
      fontWeight: '400',
      textAlign: 'center',
      margin: '10px 30px',
      color: '#000000',
    },
    bold: {
      fontSize: '3rem',
      fontWeight: '600',
      textAlign: 'center',
      margin: '10px 60px',
      color: '#000000',
    },
  },
  palette: {
    button: {
      blue: '#271AC1 ',
    },
    input: {
      white: '#000000',
    },
  },
});
theme = responsiveFontSizes(theme);

export { theme };
