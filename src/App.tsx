import MyPlantsList from 'pages/MyPlants';
import { ThemeProvider } from '@emotion/react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Container } from '@mui/material';
import Layout from 'components/Layout';
import { USER } from 'mocks/User';
import { useEffect, useState } from 'react';
import { User } from 'shared/types/User';
// import FindPlants from 'pages/FindPlants/FindPlants';

let theme = createTheme({
  typography: {
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
  }
});
theme = responsiveFontSizes(theme);

function App() {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    getUserInfo();
  }, [])

  const getUserInfo = async () => {
    // const response = await fetch('/api/user');
    // const data = await response.json();
    const data = USER;
    setUserInfo(data);
  }

  return (
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        <Layout userInfo={userInfo}>
          <MyPlantsList />
          {/* <FindPlants /> */}
        </Layout>
      </ThemeProvider>
    </Container>
  );
}

export default App;
