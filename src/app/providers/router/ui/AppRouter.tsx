import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from '../config/routeConfig.tsx';

export const AppRouter = () => {
    // Object.values(routeConfig).map((route) => console.log(route));
    const renderWithWrapper = (route: any) => {
        console.log(route);
        const element = <Suspense fallback={<div>error</div>}>{route.element}</Suspense>;
        return <Route key={route.path} path={route.path} element={element} />;
    };
    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
