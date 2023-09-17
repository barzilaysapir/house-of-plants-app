import MyPlantsList from 'pages/MyPlants';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { Container, Direction } from '@mui/material';
import Layout from 'components/Layout';
import { USER } from 'mocks/User';
import { useEffect, useState } from 'react';
import { User } from 'shared/types/User';
import theme from 'shared/utils/Theme';
import cacheRtl from 'shared/utils/CacheRtl';
import LOCALE from 'shared/utils/Locale';

function App() {
  const [userInfo, setUserInfo] = useState<User | null>(null); // change to context
  const [direction, setDirection] = useState<Direction>('ltr'); // change to context

  useEffect(() => {
    getUserInfo();
    // LOCALE.setLanguage('he')
    // setDirection(LOCALE.direction as Direction)
  }, [])

  const getUserInfo = async () => {
    // const response = await fetch('/api/user');
    // const data = await response.json();
    const data = USER;
    setUserInfo(data);
  }

  return (
    <Container maxWidth="xl">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>

          <div dir={direction}>
            {userInfo ?
              <Layout userInfo={userInfo}>
                {/* change to router */}
                <MyPlantsList />
              </Layout>
              :
              <div>Sign in/up</div>
            }
          </div>

        </ThemeProvider>
      </CacheProvider>
    </Container >
  );
}

export default App;
