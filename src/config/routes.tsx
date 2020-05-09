import React from 'react';
import { Home, Configure } from '../pages';
import { Login, SignInStart, SignInEnd } from '../pages/auth';
import { RouteDefinition } from '../models/route-definition';

const routes: RouteDefinition[] = [
    {
        route: '/configure',
        component: <Configure />,
        authenticated: false
    },
    {
        route: '/auth/login',
        component: <Login />,
        authenticated: false
    },
    {
        route: '/auth/signinstart',
        component: <SignInStart />,
        authenticated: false
    },
    {
        route: '/auth/signinend',
        component: <SignInEnd />,
        authenticated: false
    },
    {
        route: '/',
        component: <Home />,
        authenticated: true
    }
];

export default routes;