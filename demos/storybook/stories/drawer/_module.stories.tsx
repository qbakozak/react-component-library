import { Drawer } from '@pxblue/react-components';
import React from 'react';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/utils';

//@ts-ignore
const padDrawer = (storyFn) => <div style={{ margin: 20, display: 'flex', height: '100%' }}>{storyFn()}</div>;

const drawerModule = {
    title: `${COMPONENT_SECTION_NAME}/Drawer`,
    component: Drawer,
    decorators: [storyWrapper, padDrawer],
    parameters: { ...storyParams, notes: { markdown: require('./../../../../docs/Drawer.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export { withStandardInputs } from './with-standard-inputs';
export * from './with-custom-header';
export * from './with-subheader';
export * from './with-nested-list-items';
export * from './in-a-drawerLayout';

export default drawerModule;