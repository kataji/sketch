import * as React from 'react';
import { Menu, MenuPosition } from '../../components/common/menu';

export function HomeMenu () {
    const items = [
        {to:'/', label: '首页'},
        {to:'/homebook', label: '文库'},
        {to:'/homethread', label: '论坛'}, 
    ];
    let onIndex = 0;
    for (let i = 0; i < items.length; i ++) {
        if (location.pathname === items[i].to) {
            onIndex = i;
        }
    }
    return <Menu
        position={MenuPosition.top}
        items={items}
        onIndex={onIndex}
    />;
}