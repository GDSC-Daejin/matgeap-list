import React from 'react';

import { useSearchFlow } from '@src/stacks/searchStackFlow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import PlaceDetailLayout from '@templates/PlaceDetailLayout';

type PlaceDetailProps = {
  placeId: string;
};

const SearchPlaceDetail: ActivityComponentType<PlaceDetailProps> = ({
  // eslint-disable-next-line react/prop-types
  params: { placeId },
}) => {
  const { pop } = useSearchFlow();

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

export default SearchPlaceDetail;
