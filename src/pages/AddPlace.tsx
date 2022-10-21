import { addPlace } from '@apis/addPlace';
import { TextArea } from '@gdsc-dju/styled-components';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { selectPlaceStore } from '@store/selectPlaceStore';
import { userLoginStore } from '@store/userLoginStore';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import { useFlow } from '@utils/stackFlow';
import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';

const PlaceInfoBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 6px;
  margin-top: 10rem;
`;
const PlaceInfoName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: ${({ theme }) => theme.colors.grey900};
`;
const PlaceInfoAddressName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey700};
`;
const AddPlaceButton = styled.button`
  padding: 10px 12px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.textS};
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  position: fixed;
  width: calc(100% - 40px);
  box-sizing: border-box;
  bottom: 20px;
`;

const AddPlace: ActivityComponentType = () => {
  const [user] = useAtom(userLoginStore);
  const [selectedPlace] = useAtom(selectPlaceStore);
  const { pop } = useFlow();
  const [description, setDescription] = React.useState('');

  return (
    <AppScreen>
      <LayoutContainer>
        <ContainerInner>
          {user && selectedPlace && (
            <PlaceInfoBox>
              <PlaceInfoAddressName>
                {selectedPlace.category_group_name}
              </PlaceInfoAddressName>
              <PlaceInfoName>{selectedPlace.place_name}</PlaceInfoName>
              <PlaceInfoAddressName>
                {selectedPlace.road_address_name}
              </PlaceInfoAddressName>{' '}
              <TextArea
                placeholder={'추가적인 메모를 남겨보세요!'}
                onChange={(e) => setDescription(e.target.value)}
              />
              <AddPlaceButton
                onClick={() => {
                  addPlace(selectedPlace, user, description);
                  pop();
                }}
              >
                장소 추가하기
              </AddPlaceButton>
            </PlaceInfoBox>
          )}
        </ContainerInner>
      </LayoutContainer>
    </AppScreen>
  );
};

export default AddPlace;
