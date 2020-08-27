import {
  LayoutProps,
  layout,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  TypographyProps,
  typography,
  textStyle,
  ColorProps,
  color,
  background,
  BackgroundProps,
} from 'styled-system';
import styled, { DefaultTheme } from 'styled-components';

interface Props
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    BackgroundProps,
    TypographyProps,
    FlexboxProps {
  href?: string;
  textStyle?: keyof DefaultTheme['textStyles'];
}

const Typography = styled.p<Props>(
  space,
  layout,
  textStyle,
  background,
  color,
  flexbox,
  typography
);

Typography.defaultProps = {
  color: 'black',
  textStyle: 'body',
  my: 0,
};

export { Typography };
