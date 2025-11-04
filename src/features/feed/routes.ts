import type { RouteObject } from 'react-router-dom';
import { lazyLoad } from '@/app/lib/lazyLoad';

const FeedLayout = lazyLoad(() => import('@/features/feed/layouts/FeedLayout'));
const FeedPage = lazyLoad(() => import('@/features/feed/pages/FeedPage'));

export const feedRoutes: RouteObject = {
  path: 'feed',
  element: FeedLayout,
  children: [
    {
      index: true,
      element: FeedPage,
    },
  ],
};
