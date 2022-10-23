import React from 'react';

import styled from 'styled-components';

import ClearIcon from '@assets/ClearIcon.svg';
import LeftArrowIcon from '@assets/LeftArrowIcon.svg';
import RightArrowIcon from '@assets/RightArrowIcon';

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  width: fit-content;
  border: 0px solid ${({ theme }) => theme.colors.grey400};
  cursor: pointer;
`;
const Logo = styled.img<{ height: string; width: string }>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ClearButton = (props: IButtonProps) => {
  return (
    <ModalButton {...props}>
      <Logo src={ClearIcon} height={'16px'} width={'16px'} />
    </ModalButton>
  );
};
export const LeftArrowButton = (props: IButtonProps) => {
  return (
    <ModalButton {...props}>
      <Logo src={LeftArrowIcon} height={'30px'} width={'auto'} />
    </ModalButton>
  );
};
export const RightArrowButton = (props: IButtonProps) => {
  return (
    <ModalButton {...props}>
      <RightArrowIcon />
    </ModalButton>
  );
};
