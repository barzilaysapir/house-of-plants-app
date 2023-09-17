import MyPlantsList from 'pages/MyPlants/MyPlants';
import { ThemeProvider } from '@emotion/react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Container } from '@mui/material';
// import FindPlants from 'pages/FindPlants/FindPlants';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        {/* <GlobalStyle /> */}
        {/* <AppRouter /> */}
        <MyPlantsList />
        {/* <FindPlants /> */}
      </ThemeProvider>
    </Container>
  );
}

export default App;
