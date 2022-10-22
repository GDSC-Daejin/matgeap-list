import React from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import { useGetMyPlace } from '@hooks/useGetMyPlace';
import { ReviewPlaceCard } from '@molecules/PlaceCard';
import { googleLogin, googleLogout } from '@src/oauth/useGoogleOauth';
import { useMyPageFlow } from '@src/stacks/myPageStackFlow';
import { userLoginStore } from '@store/userLoginStore';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import { ApplyPlace } from '@type/address';

const MyProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;
const MyProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const MyPageUserName = styled.h1`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  font-weight: 600;
`;
const MyPageUserData = styled.span`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSizes.textM};
`;
const MyPlaceSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;
const MyPageContainerInner = styled.div`
  margin-top: 4rem;
`;
const MyPageTitle = styled.h2`
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  font-weight: 600;
`;
const LogoutButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  color: ${({ theme }) => theme.colors.grey600};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  padding: 6px 10px;
  border-radius: 10px;
`;
const Button = styled.button`
  padding: 10px 12px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.textS};
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  width: calc(100%);
  white-space: nowrap;
  box-sizing: border-box;
`;

const MyPage = () => {
  const [user, setUser] = useAtom(userLoginStore);

  const myPlace = useGetMyPlace(user?.uid);
  const { push } = useMyPageFlow();

  return (
    <LayoutContainer>
      <ContainerInner>
        {user ? (
          user.photoURL && (
            <MyPageContainerInner>
              <MyProfileWrapper>
                <MyProfileImage src={user.photoURL} />
                <MyPageUserName>{user.displayName}</MyPageUserName>
                <MyPageUserData>{user.email}</MyPageUserData>
                <MyPageUserData>{user.phoneNumber}</MyPageUserData>
                <LogoutButton
                  onClick={() => {
                    googleLogout();
                    setUser(undefined);
                    localStorage.removeItem('isLogin');
                  }}
                >
                  로그아웃하기
                </LogoutButton>
              </MyProfileWrapper>
              <MyPageTitle>내가 등록한 맛집리스트</MyPageTitle>
              <MyPlaceSection>
                {myPlace && myPlace.length > 0 ? (
                  myPlace.map((place: ApplyPlace) => (
                    <ReviewPlaceCard
                      place={place}
                      key={place.id}
                      onClick={() => {
                        push('PlaceDetail', { placeId: place.id });
                      }}
                    />
                  ))
                ) : (
                  <>
                    <MyPageUserData>등록한 맛집이 없어요</MyPageUserData>
                  </>
                )}
              </MyPlaceSection>
            </MyPageContainerInner>
          )
        ) : (
          <MyProfileWrapper>
            <h1>멋진 로고!</h1>
            <Button onClick={() => googleLogin()}>로그인 버튼!</Button>
          </MyProfileWrapper>
        )}
      </ContainerInner>
    </LayoutContainer>
  );
};

export default MyPage;
