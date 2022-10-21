import GetUserData from '@src/oauth/GetUserData';
import PopStateBlock from '@utils/PopStateBlock';
import { Stack } from '@utils/stackFlow';

function App() {
  return (
    <>
      <PopStateBlock />
      <GetUserData />
      <Stack />
    </>
  );
}
export default App;
