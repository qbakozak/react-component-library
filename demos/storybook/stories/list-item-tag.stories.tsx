import { ListItemTag } from '@pxblue/react-components';

import * as Colors from '@pxblue/colors';
import { text, withKnobs, color, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

export const stories = storiesOf('List Item Tag', module);

stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../docs/ListItemTag.md') },
});

stories.add('with different colors', () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ListItemTag
            label={text('label', 'active')}
            backgroundColor={color('backgroundColor', Colors.gold['500'])}
            fontColor={color('fontColor', Colors.black['500'])}
        />
    </div>
));

stories.add('with additional Typography props', () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ListItemTag
            label={text('label', 'clickable')}
            backgroundColor={color('backgroundColor', Colors.green['700'])}
            fontColor={color('fontColor', Colors.white['100'])}
            onClick={action('ListItemTag: onClick')}
            variant={select(
                'variant',
                [
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'subtitle1',
                    'subtitle2',
                    'body1',
                    'body2',
                    'caption',
                    'button',
                    'overline',
                    'srOnly',
                    'inherit',
                ],
                'overline'
            )}
            style={{ padding: text('style.padding', '0 4px'), width: text('style.width', 'initial') }}
            paragraph={boolean('paragraph', false)}
            noWrap={boolean('noWrap', true)}
        />
    </div>
));