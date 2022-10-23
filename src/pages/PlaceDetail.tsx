import React from 'react';

import { useGetPlaceDetail } from '@apis/useGetPlaceDetail';
import { useFlow } from '@src/stacks/homeStackFlow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import { PlaceDetailLayout } from '@templates/PlaceDetail';

type PlaceDetailProps = {
  placeId: string;
};

const PlaceDetail: ActivityComponentType<PlaceDetailProps> = ({
  // eslint-disable-next-line react/prop-types
  params: { placeId },
}) => {
  const { pop } = useFlow();
  const place = useGetPlaceDetail(placeId);

  return (
    <AppScreen>
      <LayoutContainer>
        <ContainerInner>
          <PlaceDetailLayout place={place} back={() => pop()} />
        </ContainerInner>
      </LayoutContainer>
    </AppScreen>
  );
};

export default PlaceDetail;
