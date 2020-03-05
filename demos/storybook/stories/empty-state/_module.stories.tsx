import { EmptyState } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/util';

const emptyStateModule = {
    title: `${COMPONENT_SECTION_NAME}/Empty State`,
    component: EmptyState,
    decorators: [storyWrapper],
    parameters: storyParams,
};

/* Display order goes here */
export * from './as-text-only';
export * from './with-actions';
export * from './as-a-placeholder';

export default emptyStateModule;
