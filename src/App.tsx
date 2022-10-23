import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAtom } from 'jotai';

import Alert from '@atoms/Alert';
import BottomNavigation from '@organisms/BottomNavigation';
import Star from '@pages/Star';
import GetUserData from '@src/oauth/GetUserData';
import { modalStore } from '@store/modalStore';
import { addressListStore } from '@store/searchResultsStore';

import { GoogleSpinner } from './components/GoogleSpinner';
import { HomeStack } from './stacks/homeStackFlow';
import { MyPageStack } from './stacks/myPageStackFlow';
import { SearchStack } from './stacks/searchStackFlow';

function App() {
  const [isModalOpen, setIsModalOpen] = useAtom(modalStore);
  const [result] = useAtom(addressListStore);

  return (
    <>
      <Alert />
      <GetUserData />
      <GoogleSpinner />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 0 auto',
          height: 'calc(100vh - 70px)',
          maxHeight: 'calc(100vh - 70px)',
          minHeight: 'calc(100vh - 70px)',
          overflow: 'hidden',
        }}
      >
        <Routes>
          <Route path="/" element={<HomeStack />} />
          <Route path={'/my-page'} element={<MyPageStack />} />
          <Route path={'/star'} element={<Star />} />
          <Route path={'search'} element={<SearchStack />} />
        </Routes>
      </main>
      <BottomNavigation />
    </>
  );
}
export default App;
