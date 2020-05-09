import React from 'react';
import { default as MenuItem } from '../models/menu-item';
import { GalleryIcon, PresenterIcon } from '@fluentui/react-northstar';

const menuItems: MenuItem[] = [
    {
        key: 'home',
        icon: <GalleryIcon />,
        label: 'Home',
        pageContent: <div><h1>Home tab</h1><p>Home tab content</p></div>
    },
    {
        key: 'other-content',
        icon: <PresenterIcon />,
        label: 'Other Tab',
        pageContent: <div><h1>Some other content</h1><p>Something else goes here</p></div>
    }
];

export default menuItems;