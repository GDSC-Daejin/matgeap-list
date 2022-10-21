import { useGetMyPlace } from '@hooks/useGetMyPlace';
import { ReviewPlaceCard } from '@molecules/PlaceCard';
import { googleLogin } from '@src/oauth/useGoogleOauth';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { userLoginStore } from '@store/userLoginStore';
import { ApplyPlace } from '@type/address';
import { useFlow } from '@utils/stackFlow';
import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';

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
const MyPageContainer = styled.div`
  padding: 0 20px;
`;
const MyPageUserName = styled.h1`
  color: ${({ theme }) => theme.colors.blue600};
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
`;
const MyPageUserData = styled.span`
  color: ${({ theme }) => theme.colors.grey700};
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
  margin-top: 8rem;
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
  const { pop } = useFlow();
  const myPlace = useGetMyPlace(user?.uid);

  return (
    <AppScreen>
      <MyPageContainer>
        <MyPageContainerInner>
          {user ? (
            user.photoURL && (
              <div>
                <MyProfileWrapper>
                  <MyProfileImage src={user.photoURL} />
                  <MyPageUserName>{user.displayName}</MyPageUserName>
                  <MyPageUserData>{user.email}</MyPageUserData>
                  <MyPageUserData>{user.phoneNumber}</MyPageUserData>
                </MyProfileWrapper>
                <MyPlaceSection>
                  {myPlace &&
                    myPlace.map((place: ApplyPlace) => (
                      <ReviewPlaceCard place={place} key={place.id} />
                    ))}
                </MyPlaceSection>
              </div>
            )
          ) : (
            <MyProfileWrapper>
              <h1>멋진 로고!</h1>
              <Button onClick={() => googleLogin()}>로그인 버튼!</Button>
            </MyProfileWrapper>
          )}
        </MyPageContainerInner>
      </MyPageContainer>
    </AppScreen>
  );
};

export default MyPage;
