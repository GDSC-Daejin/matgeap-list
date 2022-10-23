import React from 'react';

import styled from 'styled-components';

import GdscLogo from '@assets/GDSCLogo.svg';
import Google from '@assets/GoogleLogo.svg';
import { googleLogin } from '@src/oauth/useGoogleOauth';

const Button = styled.button`
  padding: 16px 40px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes.textL};
  font-weight: 500;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  white-space: nowrap;
  box-sizing: border-box;
  margin-bottom: 40px;
`;
const GoogleLogo = styled.img`
  height: 24px;
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
  gap: 30px;
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
        <Title>Matgeap</Title>
        <Logo src={GdscLogo} />
      </LogoWrapper>
      <Button onClick={() => googleLogin()}>
        <GoogleLogo src={Google} />
        Google로 시작하기
      </Button>
    </MyProfileWrapper>
  );
};

export default LoginBox;
