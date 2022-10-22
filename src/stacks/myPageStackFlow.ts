import PlaceDetail from '@pages/Home/HomePlaceDetail';
import MyPage from '@pages/MyPage';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

export const { Stack: MyPageStack, useFlow: useMyPageFlow } = stackflow({
  transitionDuration: 300,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  activities: {
    MyPage,
    PlaceDetail,
  },
  initialActivity: () => 'MyPage',
});
