import { Address } from '@type/address';
import React from 'react';
import styled from 'styled-components';

interface Props {
  place: Address;
  handlePlaceClick: (place: Address) => void;
}

const PlaceResultCardWrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
`;
const PlaceResultCardInner = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;
const PlaceName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  margin-bottom: 6px;
`;
const AddressName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.grey800};
`;
const Phone = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.blue900};
`;
const CategoryName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.blue900};
`;
const Url = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.blue900};
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PlaceResultCard = ({ place, handlePlaceClick }: Props) => {
  return (
    <PlaceResultCardWrapper onClick={() => handlePlaceClick(place)}>
      <PlaceResultCardInner>
        <CategoryName>{place.category_name}</CategoryName>
        <PlaceName>{place.place_name}</PlaceName>
        <AddressName>도로명 주소: {place.road_address_name}</AddressName>
        <AddressName>주소: {place.address_name}</AddressName>
        <LinkWrapper>
          <Phone href={`tel${place.phone}`}>{place.phone}</Phone>
          <Url href={place.place_url}>자세히보기</Url>
        </LinkWrapper>
      </PlaceResultCardInner>
    </PlaceResultCardWrapper>
  );
};

export default PlaceResultCard;
