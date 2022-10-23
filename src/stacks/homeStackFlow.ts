import AddPlace from '@pages/AddPlace';
import Home from '@pages/Home';
import PlaceDetail from '@pages/PlaceDetail';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

export const { Stack: HomeStack, useFlow } = stackflow({
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
    PlaceDetail,
  },
  initialActivity: () => 'Home',
});
