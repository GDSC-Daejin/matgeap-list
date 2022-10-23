import React from 'react';

import styled from 'styled-components';

import { ReviewPlaceCard } from '@molecules/PlaceCard';
import { useFlow } from '@src/stacks/homeStackFlow';
import { ApplyPlace } from '@type/address';

const MyPlaceSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;

const Notice = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey500};
`;

type Props = {
  places: ApplyPlace[];
};

const PlaceSection = ({ places }: Props) => {
  const { push } = useFlow();
  return (
    <MyPlaceSection>
      {places.length > 0 ? (
        places.map((place: ApplyPlace) => (
          <ReviewPlaceCard
            place={place}
            key={place.id}
            onClick={() => {
              push('PlaceDetail', { placeId: place.id });
            }}
          />
        ))
      ) : (
        <Notice>등록된 맛집이 없어요</Notice>
      )}
    </MyPlaceSection>
  );
};

export default PlaceSection;
