import React from 'react';

import styled from 'styled-components';

import ClearIcon from '@assets/ClearIcon';
import LeftArrowIcon from '@assets/LeftArrowIcon';
import RightArrowIcon from '@assets/RightArrowIcon';

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  width: 25px;
  height: 25px;
  border: 0px solid ${({ theme }) => theme.colors.grey400};
  cursor: pointer;
`;

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ClearButton = (props: IButtonProps) => {
  return (
    <ModalButton {...props}>
      <ClearIcon />
    </ModalButton>
  );
};
export const LeftArrowButton = (props: IButtonProps) => {
  return (
    <ModalButton {...props}>
      <LeftArrowIcon />
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
