import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as Colors from '@pxblue/colors';
import { ChannelValue } from '../ChannelValue';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            fontSize: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: '1 1 0px',
            overflow: 'hidden',
            color: theme.palette.type === 'dark' ? Colors.gray[300] : Colors.gray[500],
            padding: '16px 8px',
        },
        icon: {
            lineHeight: 1,
            color: theme.palette.type === 'dark' ? Colors.gray[50] : Colors.gray[800],
            marginBottom: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        values: {
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.type === 'dark' ? Colors.gray[50] : Colors.gray[800],
            lineHeight: 1.2,
            maxWidth: '100%',
            overflow: 'hidden',
        },
        label: {
            fontSize: 'inherit',
            lineHeight: 1.2,
            letterSpacing: 0,
            fontWeight: 600,
            width: '100%',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
    })
);

const normalizeIconSize = (size: number): number => Math.max(10, size);
const normalizeFontSize = (size: FontSize): string => (size === 'small' ? '1rem' : '1.25rem');

type FontSize = 'normal' | 'small';

export type HeroClasses = {
    root?: string;
    icon?: string;
    values?: string;
    label?: string;
};

export type HeroProps = {
    children?: React.ReactNode;
    classes?: HeroClasses;
    fontSize?: FontSize;
    icon: string | JSX.Element;
    iconBackgroundColor?: string;
    iconSize?: number;
    label: string;
    onClick?: Function;
    value?: string | number;
    valueIcon?: JSX.Element;
    units?: string;
};

export const Hero = (props: HeroProps): JSX.Element => {
    const defaultClasses = useStyles(props);
    const {
        classes,
        fontSize,
        icon,
        iconBackgroundColor,
        iconSize,
        label,
        onClick,
        value,
        valueIcon,
        units,
    } = props;

    return (
        <div
            style={{ cursor: onClick ? 'pointer' : 'inherit' }}
            className={clsx(defaultClasses.root, classes.root)}
            onClick={onClick ? (): void => onClick() : undefined}
            data-test={'wrapper'}
        >
            <span
                className={clsx(defaultClasses.icon, classes.icon)}
                style={{
                    fontSize: normalizeIconSize(iconSize),
                    height: Math.max(36, iconSize),
                    width: Math.max(36, iconSize),
                    backgroundColor: iconBackgroundColor,
                    borderRadius: '50%',
                }}
            >
                {icon}
            </span>
            <span
                className={clsx(defaultClasses.values, classes.values)}
                style={{ fontSize: normalizeFontSize(fontSize) }}
            >
                {!props.children && value && <ChannelValue value={value} units={units} icon={valueIcon} />}
                {props.children}
            </span>
            <Typography variant={'subtitle1'} color={'inherit'} className={clsx(defaultClasses.label, classes.label)}>
                {label}
            </Typography>
        </div>
    );
};


Hero.displayName = 'Hero';
Hero.propType = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        values: PropTypes.string,
        icon: PropTypes.string,
        labels: PropTypes.string,
    }),
    children: PropTypes.element,
    fontSize: PropTypes.oneOf(['normal', 'small']),
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    iconBackgroundColor: PropTypes.string,
    iconSize: PropTypes.number,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    valueIcon: PropTypes.element,
    units: PropTypes.string,
};
Hero.defaultProps = {
    classes: {},
    fontSize: 'normal',
    iconBackgroundColor: 'transparent',
    iconSize: 36,
};


