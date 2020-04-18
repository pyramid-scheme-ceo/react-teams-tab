import React from 'react';
import { default as MenuItem } from '../models/menu-item';

const menuItems: MenuItem[] = [
    {
        key: 'home',
        icon: 'gallery',
        label: 'Home',
        pageContent: <div><h1>Home tab</h1><p>Home tab content</p></div>
    },
    {
        key: 'other-content',
        icon: 'presenter',
        label: 'Other Tab',
        pageContent: <div><h1>Some other content</h1><p>Something else goes here</p></div>
    }
];

export default menuItems;