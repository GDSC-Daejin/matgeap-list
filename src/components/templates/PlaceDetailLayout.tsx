import React from 'react';

import styled from 'styled-components';

import { LeftArrowButton } from '@atoms/ClearButton';
import { useGetPlaceDetail } from '@hooks/useGetPlaceDetail';

const Blockquote = styled.blockquote`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.blue100};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  min-height: 8rem;
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: ${({ theme }) => theme.colors.blue900};
  font-weight: 600;
  word-break: break-all;
  text-align: center;
  padding: 10px 20px;
  position: relative;
  &:before {
    content: '“';
    font-size: 4rem;
    position: absolute;
    left: 20px;
    top: 10px;
    color: ${({ theme }) => theme.colors.blue900};
  }
  &:after {
    content: '”';
    font-size: 4rem;
    position: absolute;
    right: 20px;
    bottom: -10px;
    color: ${({ theme }) => theme.colors.blue900};
  }
`;
const 등록한사람 = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
`;
const 등록한사람이름 = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
`;
const 가게이름 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.titleS};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: 700;
`;
const 주소 = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey700};
`;
const 가게정보Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: ${({ theme }) => theme.colors.grey900};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;
const Category = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: ${({ theme }) => theme.colors.grey900};
`;
const 가게정보카테고리Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
`;
const 가게정보Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const 카카오맵으로이동 = styled.a`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.blue600};
  gap: 10px;
`;
const PlaceDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
  background: ${({ theme }) => theme.colors.background};
`;
const PlaceDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const 추후출시 = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: ${({ theme }) => theme.colors.grey600};
  font-weight: 600;
`;

type Props = {
  placeId: string;
  back: () => void;
};

const PlaceDetailLayout = ({ placeId, back }: Props) => {
  const place = useGetPlaceDetail(placeId);
  return (
    <PlaceDetailWrapper>
      <LeftArrowButton onClick={back} />
      {place && (
        <PlaceDetailHeader>
          <등록한사람>
            <등록한사람이름>{place.displayName}</등록한사람이름>님이 등록한
            맛집입니다.
          </등록한사람>
          <가게정보Wrapper>
            <가게정보Inner>
              <가게정보카테고리Wrapper>
                <가게이름>{place.place_name}</가게이름>
                <Category>{place.category_group_name}</Category>
              </가게정보카테고리Wrapper>
              <주소>{place.road_address_name}</주소>
            </가게정보Inner>
            <카카오맵으로이동 href={place.place_url}>
              카카오맵으로 이동
            </카카오맵으로이동>
          </가게정보Wrapper>
          <Blockquote>{place.description}</Blockquote>
        </PlaceDetailHeader>
      )}
      <hr />
      <추후출시>댓글 기능은 추후에 출시돼요.</추후출시>
    </PlaceDetailWrapper>
  );
};
export default PlaceDetailLayout;
