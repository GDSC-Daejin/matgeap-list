import MyPage from '@pages/MyPage';
import PlaceDetail from '@pages/PlaceDetail';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

export const { Stack: MyPageStack } = stackflow({
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
