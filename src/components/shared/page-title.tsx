import React from 'react';
import { Flex, FlexItem, Text } from '@fluentui/react-northstar';

export default function PageTitle(props: PageTitleProps) {
    return (
        <Flex gap="gap.medium" styles={{ paddingLeft: '5px' }}>
            {props.icon && <FlexItem align="center">
                {props.icon}
            </FlexItem>}
            <FlexItem>
                <Text content={props.title} size="large" weight="bold" />
            </FlexItem>
        </Flex>
    );
}

interface PageTitleProps {
    title: string;
    icon?: JSX.Element;
}