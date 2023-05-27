import { Ubuntu } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const ubuntu = Ubuntu({ subsets: ["greek"], weight: ["400"] });

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ubuntu.style.fontFamily,
  },
});

export default theme;