import { css } from '@emotion/react';
import theme from '../theme'

type TypographyScale = 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg'

export function textStyle(size: TypographyScale) {
  return css`
    font-size: ${theme.fontSizes[size]};
    line-height: ${theme.lineHeights[size]};
    letter-spacing: ${theme.letterSpacings[size]};
  `
}

export function truncate() {
  return css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `
}

export function lineClamp(line: number) {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `
}
