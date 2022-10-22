import React from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import { ClearButton } from '@atoms/ClearButton';
import { useGetPlaceDetail } from '@hooks/useGetPlaceDetail';
import { useHomeFlow } from '@src/stacks/homeStackFlow';
import { userLoginStore } from '@store/userLoginStore';
import { Address } from '@type/address';

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
  gap: 6px;
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
  flex-direction: row;
  justify-content: space-between;
`;
const AddPlaceButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.blue600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.textS};
  border: 1px solid ${({ theme }) => theme.colors.blue600};
`;
const PlaceAddress = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  color: ${({ theme }) => theme.colors.grey800};
`;
const 상세보기 = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  color: ${({ theme }) => theme.colors.blue600};
  margin-bottom: 2px;
`;
const ButtonWrapper = styled.div`
  position: relative;
  align-self: flex-start;
  top: 0;
  right: 0;
`;

const PlaceInfoBox = ({ placeInfo, setInfo }: PlaceInfoBoxProps) => {
  const [user] = useAtom(userLoginStore);
  const { push } = useHomeFlow();
  const place = useGetPlaceDetail(placeInfo.id);
  return (
    <BoxWrapper>
      <BoxHeader>
        <PlaceName>{placeInfo.place_name}</PlaceName>
        <ButtonWrapper>
          <ClearButton onClick={() => setInfo(null)} />
        </ButtonWrapper>
      </BoxHeader>
      <PlaceAddress>{placeInfo.road_address_name}</PlaceAddress>
      <BoxBody>
        <상세보기 href={`tel:${placeInfo.phone}`}>{placeInfo.phone}</상세보기>
        <상세보기 href={placeInfo.place_url} target="_blank">
          상세보기
        </상세보기>
      </BoxBody>
      {place && <PlaceAddress>이미 등록된 맛집이네요!</PlaceAddress>}
      {place ? (
        <AddPlaceButton
          onClick={() =>
            user
              ? push('HomePlaceDetail', { placeId: placeInfo.id })
              : alert('로그인해주세요!')
          }
        >
          댓글 남기기
        </AddPlaceButton>
      ) : (
        <AddPlaceButton
          onClick={() =>
            user ? push('AddPlace', {}) : alert('로그인해주세요!')
          }
        >
          장소 추가하기
        </AddPlaceButton>
      )}
    </BoxWrapper>
  );
};

export default PlaceInfoBox;
