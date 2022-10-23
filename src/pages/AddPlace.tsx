import React, { useEffect } from 'react';

import { useAtom } from 'jotai';

import { addPlace } from '@apis/addPlace';
import { useFlow } from '@src/stacks/homeStackFlow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { alertStore } from '@store/alertStore';
import { selectPlaceStore } from '@store/selectPlaceStore';
import { userLoginStore } from '@store/userLoginStore';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import { AddPlaceLayout } from '@templates/AddPlace';

const AddPlace: ActivityComponentType = () => {
  const [user] = useAtom(userLoginStore);
  const [selectedPlace] = useAtom(selectPlaceStore);
  const [, setAlert] = useAtom(alertStore);
  const { pop } = useFlow();
  const addPlaceHandler = async (input: HTMLTextAreaElement | null) => {
    if (!user || !selectedPlace || !input) return;
    addPlace(selectedPlace, user, input.value);
    pop();
    setAlert({
      message: '장소가 추가되었어요',
      status: 'SUCCESS',
      isActive: true,
    });
  };

  useEffect(() => {
    if (!selectedPlace) {
      setAlert({
        message: '선택된 장소가 없어요.',
        status: 'ERROR',
        isActive: true,
      });
      pop();
    }
    if (!user) {
      setAlert({
        message: '로그인이 필요해요.',
        status: 'ERROR',
        isActive: true,
      });
      pop();
    }
  }, [selectedPlace, user]);

  return (
    <AppScreen>
      <LayoutContainer>
        <ContainerInner>
          {selectedPlace && (
            <AddPlaceLayout
              place={selectedPlace}
              addPlace={addPlaceHandler}
              back={() => pop()}
            />
          )}
        </ContainerInner>
      </LayoutContainer>
    </AppScreen>
  );
};

export default AddPlace;
