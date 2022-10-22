import { Route, Routes } from 'react-router-dom';

import BottomNavigation from '@organisms/BottomNavigation';
import GetUserData from '@src/oauth/GetUserData';

import { GoogleSpinner } from './components/GoogleSpinner';
import { HomeStack } from './stacks/homeStackFlow';
import { MyPageStack } from './stacks/myPageStackFlow';
import { SearchStack } from './stacks/searchStackFlow';

function App() {
  return (
    <>
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
          <Route path={'search'} element={<SearchStack />} />
        </Routes>
      </main>
      <BottomNavigation />
    </>
  );
}
export default App;
