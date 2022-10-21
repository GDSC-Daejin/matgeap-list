import ClearButton from '@atoms/ClearButton';
import { Address } from '@type/address';
import React from 'react';
import styled from 'styled-components';

type PlaceInfoBoxProps = {
  placeInfo: Address;
  setInfo: (string: Address | null) => void;
};

const BoxWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  border-radius: 6px;
  box-shadow: 0 0 2px 0 ${({ theme }) => theme.colors.blue600};
  position: relative;
  transform: translate(0, -40%);
  z-index: 100;
  min-width: 200px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
const PlaceName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  word-break: break-all;
  white-space: pre-line;
`;
const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;
const BoxBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const PlaceAddress = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey800};
`;
const 상세보기 = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.blue600};
`;
const ButtonWrapper = styled.div`
  position: relative;
  align-self: flex-start;
  top: 0;
  right: 0;
`;

const PlaceInfoBox = ({ placeInfo, setInfo }: PlaceInfoBoxProps) => {
  return (
    <BoxWrapper>
      <BoxHeader>
        <PlaceName>{placeInfo.place_name}</PlaceName>
        <ButtonWrapper>
          <ClearButton onClick={() => setInfo(null)} />
        </ButtonWrapper>
      </BoxHeader>
      <BoxBody>
        <PlaceAddress>{placeInfo.road_address_name}</PlaceAddress>
        <상세보기 href={`tel:${placeInfo.phone}`}>{placeInfo.phone}</상세보기>
        <상세보기 href={placeInfo.place_url} target="_blank">
          상세보기
        </상세보기>
      </BoxBody>
    </BoxWrapper>
  );
};

export default PlaceInfoBox;
