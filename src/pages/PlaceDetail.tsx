import { useGetPlaceDetail } from '@hooks/useGetPlaceDetail';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import React from 'react';
import styled from 'styled-components';

type PlaceDetailProps = {
  placeId: string;
};

const Blockquote = styled.blockquote`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
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
            <div>{place.place_name}</div>
            <Blockquote>{place.description}</Blockquote>
          </ContainerInner>
        )}
      </LayoutContainer>
    </AppScreen>
  );
};

export default PlaceDetail;
