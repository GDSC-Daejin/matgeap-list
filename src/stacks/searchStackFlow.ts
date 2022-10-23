import PlaceDetail from '@pages/PlaceDetail';
import Search from '@pages/Search';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

export const { Stack: SearchStack } = stackflow({
  transitionDuration: 300,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  activities: {
    Search,
    PlaceDetail,
  },
  initialActivity: () => 'Search',
});
