import { AppRoutes, getRouteMain, getRouteSettings } from '@/shared';
import MainPage from '@/pages/Main/Main.page.tsx';

export const routeConfig = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
    },
};
