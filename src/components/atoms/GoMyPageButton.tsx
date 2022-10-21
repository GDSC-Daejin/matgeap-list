import AccountCircle from '@assets/AccountCircle.svg';
import { userLoginStore } from '@store/userLoginStore';
import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';

const LoginButtonWrapper = styled.button`
  position: relative;
  min-width: 50px;
  height: 50px;
  padding: 0;
  border-radius: 50%;
  border: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UserImage = styled.img`
  width: 50px;
  height: 50px;
`;
const AccountCircleImage = styled.img`
  width: 50px;
  height: 50px;
`;

interface LoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const LoginButton = (props: LoginButtonProps) => {
  const [user] = useAtom(userLoginStore);
  const { children, ...rest } = props;
  return (
    <LoginButtonWrapper {...rest}>
      {user ? (
        user.photoURL && <UserImage src={user.photoURL} />
      ) : (
        <AccountCircleImage src={AccountCircle} />
      )}
    </LoginButtonWrapper>
  );
};

export default LoginButton;
