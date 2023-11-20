import { AppRoutes, getRouteMain, getRouteSettings } from '@pet/shared';
import MainPage from '@pet/pages/Main/Main.page.tsx';

export const routeConfig = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
    },
};
