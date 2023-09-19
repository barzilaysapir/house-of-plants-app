import { CacheProvider, ThemeProvider } from '@emotion/react';
import { Direction } from '@mui/material';
import Layout from 'features/Layout/component';
import { USER } from 'mocks/User';
import { useEffect, useState } from 'react';
import { User } from 'shared/types/Users';
import theme from 'shared/utils/Theme';
import cacheRtl from 'shared/utils/CacheRtl';
import { Outlet, useLoaderData } from 'react-router';
import LOCALE from 'locale/Locale';
import GlobalStyles from 'GlobalStyle';
import { Global } from "@emotion/react";

const getUserInfo = async () => {
  // const response = await fetch('/api/user');
  // const data = await response.json();
  const data = USER;
  await new Promise(resolve => setTimeout(resolve, 300));
  return data;
}

export async function loader() {
  return await getUserInfo();
}

function Root() {
  const [direction, setDirection] = useState<Direction>('ltr'); // change to context
  const userInfo = useLoaderData() as User;

  useEffect(() => {
    // LOCALE.setLanguage('he');
    // setDirection(LOCALE.direction as Direction);
  }, [])

  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />

          <div dir={direction}>
            <Layout userInfo={userInfo}>
              <Outlet />
            </Layout>
          </div>

        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default Root;
