import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps<C extends React.ElementType = "button"> = {
    children: React.ReactNode;
    as?: C;
    variant?: 'primary' | 'secondary';
    icon?: React.ElementType;
    fontSize?: Sizes | [Sizes] | [Sizes, Sizes];
    size?: 'regular' | 'small';
    additional?: string;
    rounded?: boolean;
} & React.ComponentPropsWithoutRef<C>;

export type Sizes =
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl';

const colorStyles = {
    primary: {
        background: '#000000', // Black
        color: '#FFFFFF', // White
        hoverBackground: '#555555', // Dark Grey
    },
    secondary: {
        background: 'transparent',
        color: '#000000', // Black
        border: '1px solid #000000',
    },
} as const;

type ColorStyles = typeof colorStyles;

const fontSizeMap: Record<Sizes, string> = {
    xxs: '0.5rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
    '7xl': '5rem',
};

const StyledButton = styled.button<{
    variant: keyof ColorStyles;
    size: string;
    rounded: boolean;
    fontSize: string;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-weight: bold;
    padding: ${({ size }) => (size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem')};
    border-radius: ${({ rounded }) => (rounded ? '0.375rem' : '0')};

    ${({ variant }) => {
        const styles = colorStyles[variant];
        return css`
            background-color: ${styles.background};
            color: ${styles.color};
            border: variant === 'secondary' ? styles.border : 'none';

            &:hover {
                background-color: ${variant === 'primary' ? (styles as { hoverBackground: string }).hoverBackground : styles.background};
                color: ${styles.color};
            }
        `;
    }}

    ${({ fontSize }) => fontSize && css`
        font-size: ${fontSize};
    `}
`;

const Button = <C extends React.ElementType = "button">({
    children,
    as,
    variant = "primary",
    additional,
    icon: Icon,
    size = "regular",
    rounded = false,
    fontSize = 'md',
    ...restProps
}: ButtonProps<C>) => {
    const Component = as || StyledButton;


    const fontSizeString = Array.isArray(fontSize)
        ? fontSize.map(size => fontSizeMap[size]).join(' ')
        : fontSizeMap[fontSize];

    return (
        <Component
            as={Component}
            variant={variant}
            size={size}
            rounded={rounded}
            fontSize={fontSizeString}
            className={additional}
            {...restProps}
        >
            {children}
            {Icon && <Icon className="ml-2" />}
        </Component>
    );
};

export default Button;