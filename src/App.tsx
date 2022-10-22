import { Route, Routes } from 'react-router-dom';

import BottomNavigation from '@organisms/BottomNavigation';
import SearchPage from '@pages/SearchPage';
import GetUserData from '@src/oauth/GetUserData';

import { HomeStack } from './stacks/homeStackFlow';
import { MyPageStack } from './stacks/myPageStackFlow';

function App() {
  return (
    <>
      <GetUserData />
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
          <Route path={'search'} element={<SearchPage />} />
        </Routes>
      </main>
      <BottomNavigation />
    </>
  );
}
export default App;
