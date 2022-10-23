import React from 'react';

import { useAtom } from 'jotai';

import { useGetMyPlace } from '@apis/useGetMyPlace';
import { googleLogout } from '@src/oauth/useGoogleOauth';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { userLoginStore } from '@store/userLoginStore';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import MyPageLayout from '@templates/MyPage/MyPageLayout';

const MyPage = () => {
  const [user, setUser] = useAtom(userLoginStore);

  const myPlace = useGetMyPlace(user?.uid);

  const logout = () => {
    googleLogout();
    setUser(undefined);
    localStorage.removeItem('isLogin');
  };

  return (
    <AppScreen>
      <LayoutContainer>
        <ContainerInner>
          <MyPageLayout logout={logout} user={user} myPlaces={myPlace} />
        </ContainerInner>
      </LayoutContainer>
    </AppScreen>
  );
};

export default MyPage;
