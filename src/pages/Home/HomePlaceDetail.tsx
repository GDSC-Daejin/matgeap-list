import React from 'react';

import { useHomeFlow } from '@src/stacks/homeStackFlow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import PlaceDetailLayout from '@templates/PlaceDetailLayout';

type PlaceDetailProps = {
  placeId: string;
};

const HomePlaceDetail: ActivityComponentType<PlaceDetailProps> = ({
  // eslint-disable-next-line react/prop-types
  params: { placeId },
}) => {
  const { pop } = useHomeFlow();

  return (
    <AppScreen>
      <LayoutContainer>
        <ContainerInner>
          <PlaceDetailLayout placeId={placeId} back={() => pop()} />
        </ContainerInner>
      </LayoutContainer>
    </AppScreen>
  );
};

export default HomePlaceDetail;
