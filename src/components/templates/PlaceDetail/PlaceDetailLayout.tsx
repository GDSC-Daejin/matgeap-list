import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { LeftArrowButton } from '@atoms/ClearButton';
import { ApplyPlace } from '@type/address';

import * as S from './styled';

type Props = {
  place: ApplyPlace;
  back: () => void;
};

const PlaceDetailLayout = ({ back, place }: Props) => {
  return (
    <S.PlaceDetailWrapper>
      {place && (
        <>
          <S.PlaceDetailHeader>
            <LeftArrowButton onClick={back} />
            <S.등록한사람>
              <S.등록한사람이름>{place.displayName}</S.등록한사람이름>님이
              등록한 맛집입니다.
            </S.등록한사람>
            <S.MapWrapper>
              <Map
                center={{
                  lat: place.y,
                  lng: place.x,
                }}
                style={{
                  width: '100%',
                  height: '350px',
                }}
                level={4}
                draggable={false}
              >
                <MapMarker
                  position={{
                    lat: place.y,
                    lng: place.x,
                  }}
                />
              </Map>
            </S.MapWrapper>
            <S.가게정보Wrapper>
              <S.가게정보Inner>
                <S.가게정보카테고리Wrapper>
                  <S.가게이름>{place.place_name}</S.가게이름>
                  <S.Category>{place.category_group_name}</S.Category>
                </S.가게정보카테고리Wrapper>
                <S.주소>{place.road_address_name}</S.주소>
                <S.Phone href={`tel:${place.phone}`}>{place.phone}</S.Phone>
              </S.가게정보Inner>
              <S.카카오맵으로이동 href={place.place_url}>
                카카오맵으로 이동
              </S.카카오맵으로이동>
            </S.가게정보Wrapper>
            <S.Blockquote>{place.description}</S.Blockquote>
          </S.PlaceDetailHeader>
        </>
      )}
      <hr />
      <S.추후출시>댓글 기능은 추후에 출시돼요.</S.추후출시>
    </S.PlaceDetailWrapper>
  );
};
export default PlaceDetailLayout;
