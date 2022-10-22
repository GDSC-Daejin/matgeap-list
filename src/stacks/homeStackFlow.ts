import AddPlace from '@pages/Home/AddPlace';
import Home from '@pages/Home/Home';
import HomePlaceDetail from '@pages/Home/HomePlaceDetail';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

export const { Stack: HomeStack, useFlow: useHomeFlow } = stackflow({
  transitionDuration: 300,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  activities: {
    Home,
    AddPlace,
    HomePlaceDetail,
  },
  initialActivity: () => 'Home',
});
