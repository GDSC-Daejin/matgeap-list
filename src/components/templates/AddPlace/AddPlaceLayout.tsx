import React from 'react';

import { LeftArrowButton } from '@atoms/ClearButton';
import { TextArea } from '@gdsc-dju/styled-components';
import { Address } from '@type/address';

import * as S from './styled';

type Props = {
  place: Address;
  addPlace: (input: HTMLTextAreaElement | null) => void;
  back: () => void;
};

const AddPlaceLayout = ({ place, addPlace, back }: Props) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  return (
    <S.PlaceInfoBox>
      <LeftArrowButton onClick={back} />
      <S.PlaceInfoAddressName>
        {place.category_group_name}
      </S.PlaceInfoAddressName>
      <S.PlaceInfoName>{place.place_name}</S.PlaceInfoName>
      <S.PlaceInfoAddressName>{place.road_address_name}</S.PlaceInfoAddressName>
      <TextArea ref={inputRef} placeholder={'이 장소를 한 마디로 표현하면?'} />
      <S.AddPlaceButton onClick={() => addPlace(inputRef.current)}>
        장소 추가하기
      </S.AddPlaceButton>
    </S.PlaceInfoBox>
  );
};

export default AddPlaceLayout;
