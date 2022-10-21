import { useGetMyPlace } from '@hooks/useGetMyPlace';
import { googleLogin, googleLogout } from '@src/oauth/useGoogleOauth';
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
`;
const MyPageContainer = styled.div`
  padding: 0 20px;
`;
const MyPageContainerInner = styled.div``;
const Button = styled.button`
  padding: 10px 12px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.textS};
  border: 1px solid ${({ theme }) => theme.colors.blue600};

  width: calc(100%);
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
              <MyProfileWrapper>
                <MyProfileImage src={user.photoURL} />
                <h1>{user.displayName}</h1>
                <span>{user.email}</span>
                <span>{user.phoneNumber}</span>
                <Button
                  onClick={() => {
                    googleLogout();
                    pop();
                    setUser(undefined);
                  }}
                >
                  로그아웃 하기!
                </Button>
                {myPlace &&
                  myPlace.map((place: ApplyPlace) => (
                    <div key={place.id}>
                      <h1>{place.place_name}</h1>
                      <span>{place.address_name}</span>
                      <span>{place.description}</span>
                    </div>
                  ))}
              </MyProfileWrapper>
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
