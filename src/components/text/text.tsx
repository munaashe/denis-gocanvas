import React from 'react';
import styled, { css } from 'styled-components';

type TextVariant =
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'title5'
    | 'body1'
    | 'body2'
    | 'label1'
    | 'link';

type TextProps<C extends React.ElementType = 'p'> = {
    children: React.ReactNode;
    as?: C;
    color?: 'black' | 'white' | 'grey';
    weight?: 'normal' | 'bold';
    size?: 'sm' | 'md' | 'lg';
    additional?: string;
    variant?: TextVariant;
} & React.ComponentPropsWithoutRef<C>;

const colorStyles = {
    black: '#313131',
    white: '#FFFFFF',
    grey: '#808080',
};

const variantStyles: Record<TextVariant, any> = {
    title1: css`
        font-size: 3rem;
        @media (min-width: 640px) {
            font-size: 1.5rem;
        }
        @media (min-width: 768px) {
            font-size: 5rem;
        }
        font-weight: bold;
    `,
    title2: css`
        font-size: 3rem;
        @media (min-width: 768px) {
            font-size: 6rem;
        }
        font-weight: bold;
    `,
    title3: css`
        font-size: 2rem;
        @media (min-width: 768px) {
            font-size: 5rem;
        }
        font-weight: bold;
    `,
    title4: css`
        font-size: 1.125rem;
        @media (min-width: 768px) {
            font-size: 4rem;
        }
        font-weight: bold;
    `,
    title5: css`
        font-size: 1.125rem;
        @media (min-width: 768px) {
            font-size: 2rem;
        }
        font-weight: bold;
    `,
    body1: css`
        font-size: 1.125rem;
        @media (min-width: 768px) {
            font-size: 1.25rem;
        }
    `,
    body2: css`
        font-size: 0.875rem;
        @media (min-width: 768px) {
            font-size: 1.125rem;
        }
    `,
    label1: css`
        font-size: 1rem;
        @media (min-width: 768px) {
            font-size: 1.25rem;
        }
    `,
    link: css`
        font-size: 0.75rem;
        @media (min-width: 768px) {
            font-size: 1rem;
        }
    `,
};

const StyledText = styled.p<{ color: string; weight: 'normal' | 'bold'; variant: TextVariant }>`
    ${({ color, weight, variant }) => css`
        color: ${color};
        font-weight: ${weight === 'bold' ? 'bold' : 'normal'};
        ${variantStyles[variant]}
    `}
`;

const Text = <C extends React.ElementType = 'p'>({
    children,
    as,
    color = 'black',
    weight = 'normal',
    size = 'md',
    additional,
    variant = 'body1',
    ...restProps
}: TextProps<C>) => {
    const Component = as || StyledText;

    return (
        <Component
            as={Component}
            color={colorStyles[color] || colorStyles.black}
            weight={weight}
            variant={variant}
            className={additional}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export default Text;