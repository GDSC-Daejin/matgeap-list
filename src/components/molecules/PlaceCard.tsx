import { Address, ApplyPlace } from '@type/address';
import { useFlow } from '@utils/stackFlow';
import React from 'react';
import styled from 'styled-components';

const PlaceResultCardWrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
  &:last-child {
    border-bottom: none;
  }
`;
const PlaceResultCardInner = styled.div`
  box-sizing: border-box;
  padding: 10px 0;
  width: 100%;
`;
const PlaceName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  font-weight: 600;
  margin-bottom: 6px;
`;
const AddressName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.grey800};
`;
const Phone = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.blue900};
`;
const CategoryName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.blue900};
`;
const Url = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.blue900};
`;
const 댓글달기 = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.blue900};
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
`;

interface PlaceResultCardProps {
  place: Address;
  handlePlaceClick: (place: Address) => void;
}

const ResultPlaceCard = ({ place, handlePlaceClick }: PlaceResultCardProps) => {
  return (
    <PlaceResultCardWrapper onClick={() => handlePlaceClick(place)}>
      <PlaceResultCardInner>
        <CategoryName>{place.category_name}</CategoryName>
        <PlaceName>{place.place_name}</PlaceName>
        <AddressName>{place.road_address_name}</AddressName>
        <AddressName>{place.address_name}</AddressName>
        <LinkWrapper>
          <Phone href={`tel${place.phone}`}>{place.phone}</Phone>
          <Url href={place.place_url}>자세히보기</Url>
        </LinkWrapper>
      </PlaceResultCardInner>
    </PlaceResultCardWrapper>
  );
};

interface ReviewPlaceCardProps {
  place: ApplyPlace;
}
const ReviewPlaceCard = ({ place }: ReviewPlaceCardProps) => {
  const { push } = useFlow();
  return (
    <PlaceResultCardWrapper
      onClick={() => {
        push('PlaceDetail', { placeId: place.id });
      }}
    >
      <PlaceResultCardInner>
        <CategoryName>{place.category_name}</CategoryName>
        <PlaceName>{place.place_name}</PlaceName>
        <AddressName>{place.road_address_name}</AddressName>
        <LinkWrapper>
          <Phone href={`tel${place.phone}`}>{place.phone}</Phone>
        </LinkWrapper>
      </PlaceResultCardInner>
    </PlaceResultCardWrapper>
  );
};

export { ResultPlaceCard, ReviewPlaceCard };
