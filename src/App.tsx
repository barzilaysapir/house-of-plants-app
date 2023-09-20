import { CacheProvider, ThemeProvider } from '@emotion/react';
import { Direction } from '@mui/material';
import Layout from 'features/Layout/Layout';
import { useEffect, useState } from 'react';
import { User } from 'shared/types/Users';
import theme from 'config/Theme';
import cacheRtl from 'config/CacheRtl';
import { Outlet, useLoaderData } from 'react-router';
import LOCALE from 'config/locale/Locale';
import GlobalStyles from 'styles/GlobalStyle';
import { Global } from "@emotion/react";

function App() {
  const [direction, setDirection] = useState<Direction>('ltr'); // change to context
  const userInfo = useLoaderData() as User;

  useEffect(() => {
    // LOCALE.setLanguage('he');
    // setDirection(LOCALE.direction as Direction);
  }, [])

  return (
    <div dir={direction}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />

          <Layout userInfo={userInfo}>
            <Outlet />
          </Layout>

        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default App;
