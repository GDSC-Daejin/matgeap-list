import React from 'react';

import styled from 'styled-components';

import GdscLogo from '@assets/GDSCLogo.svg';
import { googleLogin } from '@src/oauth/useGoogleOauth';

const Button = styled.button`
  padding: 10px 12px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.textM};
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  width: calc(100%);
  white-space: nowrap;
  box-sizing: border-box;
  margin-bottom: 40px;
`;
const MyProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 70px);
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const LogoWrapper = styled.div`
  margin-top: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
const Logo = styled.img`
  width: 10rem;
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey900};
`;

const LoginBox = () => {
  return (
    <MyProfileWrapper>
      <LogoWrapper>
        <Title>GDSC Matgeap</Title>
        <Logo src={GdscLogo} />
      </LogoWrapper>
      <Button onClick={() => googleLogin()}>구글 로그인</Button>
    </MyProfileWrapper>
  );
};

export default LoginBox;
