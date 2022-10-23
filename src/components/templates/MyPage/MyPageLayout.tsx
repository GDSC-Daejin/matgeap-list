import React from 'react';

import LoginBox from '@organisms/LoginBox';
import PlaceSection from '@organisms/PlaceSection';
import { User } from '@store/userLoginStore';
import { ApplyPlace } from '@type/address';

import * as S from './styled';

type Props = {
  user: User | undefined;
  logout: () => void;
  myPlaces: ApplyPlace[];
};

const MyPageLayout = ({ user, logout, myPlaces }: Props) => {
  return (
    <>
      {user ? (
        user.photoURL && (
          <S.MyPageContainerInner>
            <S.MyProfileWrapper>
              <S.MyProfileImage src={user.photoURL} />
              <S.MyPageUserName>{user.displayName}</S.MyPageUserName>
              <S.MyPageUserData>{user.email}</S.MyPageUserData>
              <S.MyPageUserData>{user.phoneNumber}</S.MyPageUserData>
              <S.LogoutButton onClick={logout}>로그아웃하기</S.LogoutButton>
            </S.MyProfileWrapper>
            <S.MyPageTitle>내가 등록한 맛집리스트</S.MyPageTitle>
            <PlaceSection places={myPlaces} />
          </S.MyPageContainerInner>
        )
      ) : (
        <LoginBox />
      )}
    </>
  );
};

export default MyPageLayout;
