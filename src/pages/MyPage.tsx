import React from 'react';

import { useAtom } from 'jotai';

import { useGetMyPlace } from '@hooks/useGetMyPlace';
import { googleLogout } from '@src/oauth/useGoogleOauth';
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
    <LayoutContainer>
      <ContainerInner>
        <MyPageLayout logout={logout} user={user} myPlaces={myPlace} />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default MyPage;
