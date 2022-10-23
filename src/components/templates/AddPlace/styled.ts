import styled from 'styled-components';

export const PlaceInfoBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  margin-top: 10rem;
`;
export const PlaceInfoName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const PlaceInfoAddressName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey700};
`;
export const AddPlaceButton = styled.button`
  padding: 10px 12px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.textS};
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
`;
