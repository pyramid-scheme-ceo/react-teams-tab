import React from 'react';
import { Flex, FlexItem, Text, Icon } from '@fluentui/react-northstar';

export default function PageTitle(props: PageTitleProps) {
    return (
        <Flex gap="gap.medium" styles={{ paddingLeft: '5px' }}>
            {props.icon && <FlexItem align="center">
                <Icon name={props.icon} />
            </FlexItem>}
            <FlexItem>
                <Text content={props.title} size="large" weight="bold" />
            </FlexItem>
        </Flex>
    );
}

interface PageTitleProps {
    title: string;
    icon?: string;
}