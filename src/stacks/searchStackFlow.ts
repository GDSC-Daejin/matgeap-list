import PlaceDetail from '@pages/PlaceDetail';
import SearchPage from '@pages/SearchPage';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

export const { Stack: SearchStack, useFlow: useSearchFlow } = stackflow({
  transitionDuration: 300,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  activities: {
    SearchPage,
    PlaceDetail,
  },
  initialActivity: () => 'SearchPage',
});
