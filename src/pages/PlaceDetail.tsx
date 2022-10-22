import React from 'react';

import styled from 'styled-components';

import { useGetPlaceDetail } from '@hooks/useGetPlaceDetail';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { ContainerInner, LayoutContainer } from '@styles/layouts';

type PlaceDetailProps = {
  placeId: string;
};

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
  margin-top: 60px;
`;
const PlaceDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const PlaceDetail: ActivityComponentType<PlaceDetailProps> = ({
  // eslint-disable-next-line react/prop-types
  params: { placeId },
}) => {
  const place = useGetPlaceDetail(placeId);
  return (
    <AppScreen>
      <LayoutContainer>
        {place && (
          <ContainerInner>
            <PlaceDetailWrapper>
              <PlaceDetailHeader>
                <등록한사람>
                  <등록한사람이름>{place.displayName}</등록한사람이름>님이
                  등록한 맛집입니다.
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
              <hr />
              <div>댓글</div>
            </PlaceDetailWrapper>
          </ContainerInner>
        )}
      </LayoutContainer>
    </AppScreen>
  );
};

export default PlaceDetail;
