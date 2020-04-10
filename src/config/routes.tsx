import React from 'react';
import { Home, Configure } from '../pages';
import { RouteDefinition } from '../models/route-definition';

const routes: RouteDefinition[] = [
    {
        route: '/configure',
        component: <Configure />
    },
    {
        route: '/',
        component: <Home />
    }
]

export default routes;