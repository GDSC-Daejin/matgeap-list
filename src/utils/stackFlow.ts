import AddPlace from '@pages/AddPlace';
import Home from '@pages/Home';
import MyPage from '@pages/MyPage';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  activities: {
    Home,
    MyPage,
    AddPlace,
  },
  initialActivity: () => 'Home',
});
