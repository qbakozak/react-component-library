import { Avatar } from '@material-ui/core';
import { UserMenu } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { getMenu } from './with-basic-usage';

export const withMenuHeader = (): StoryFnReactReturnType => {
    const avatar = <Avatar>EM</Avatar>;
    const menuTitle = text('menuTitle', 'Menu Title');
    const menuSubtitle = text('menuSubtitle', 'Menu Subtitle');
    return <UserMenu avatar={avatar} menuGroups={getMenu()} menuTitle={menuTitle} menuSubtitle={menuSubtitle} />;
};

withMenuHeader.story = { name: 'with menu headers' };
