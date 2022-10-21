import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue600};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  font-size: ${({ theme }) => theme.fontSizes.textM};
  padding: 0 16px;
  border-radius: 10px;
  z-index: 100;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue900};
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
