import React from 'react';
import { Segment, Menu, ShorthandCollection, MenuItemProps, MenuShorthandKinds } from '@fluentui/react-northstar';
import { default as MenuItem } from '../../models/menu-item';

/**
 * Default number of columns in a flex box to divide content between
 */
const pageWidth = 12;

/**
 * The vertical menu component. This renders a list of items to choose between on
 * the left of the screen and the content of that item on the right hand side.
 */
export default class VerticalMenu extends React.Component<VerticalMenuProps, VerticalMenuState> {
    private menuWidth: number;

    constructor(props: VerticalMenuProps) {
        super(props);

        this.menuWidth = props.menuWidth;

        this.state = {
            menuItems: props.menuItems,
            currentKey: props.menuItems.length > 0 ? props.menuItems[0].key : ''
        };
    }

    render() {
        return (
            <React.Fragment>
                <Segment
                    content={this.renderMenu()}
                    styles={{ gridColumn: `span ${this.menuWidth}` }}
                />
                <Segment
                    content={this.renderContent()}
                    styles={{ gridColumn: `span ${pageWidth - this.menuWidth}` }}
                />
            </React.Fragment>
        );
    }

    private renderMenu() {
        return (
            <Menu
                defaultActiveIndex={0}
                items={this.formatMenuItems(this.state.menuItems)}
                vertical
                pointing
                styles={{ width: 'auto' }}
                onActiveIndexChange={this.menuItemChanged.bind(this)}
            />
        );
    }

    private renderContent() {
        let currentContent = this.state.menuItems.filter(mi => mi.key === this.state.currentKey);

        if (currentContent.length !== 1) {
            console.error(`A single item was not found for content with key: ${this.state.currentKey}`);
        }

        return (
            currentContent[0].pageContent
        );
    }

    private formatMenuItems(items: MenuItem[]): ShorthandCollection<MenuItemProps, MenuShorthandKinds> {
        let result: ShorthandCollection<MenuItemProps, MenuShorthandKinds> = [];

        for (let item of items) {
            result.push({
                key: item.key,
                content: item.label,
                icon: item.icon
            });
        }

        return result;
    }

    private menuItemChanged(event: React.SyntheticEvent<HTMLElement>, menu: any) {
        let currentIndex = menu.activeIndex;

        if (menu.items && menu.items[currentIndex]) {
            this.setState({
                currentKey: menu.items[currentIndex].key
            });
        }
    }
}

/**
 * Vertical menu props type
 */
interface VerticalMenuProps {
    /**
     * The width of the menu bar in css units (container divided by 12)
     */
    menuWidth: 1|2|3|4|5|6|7|8|9|10|11|12;

    /**
     * The menu items to choose between
     */
    menuItems: MenuItem[];
}

/**
 * Vertical menu state type
 */
interface VerticalMenuState {
    /**
     * THe key of the current component to be shown
     */
    currentKey: string;

    /**
     * The menu items to choose between
     */
    menuItems: MenuItem[];
}