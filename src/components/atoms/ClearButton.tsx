import ClearIcon from '@assets/ClearIcon';
import LeftArrowIcon from '@assets/LeftArrowIcon';
import RightArrowIcon from '@assets/RightArrowIcon';
import React from 'react';
import styled from 'styled-components';

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey100};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.grey400};
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
