import {
  LayoutProps,
  layout,
  space,
  SpaceProps,
  ColorProps,
  color,
  flexbox,
  FlexboxProps,
  background,
  BackgroundProps,
  position,
  PositionProps,
  grid,
  GridProps,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
} from 'styled-system';
import styled from 'styled-components';

export interface BoxProps
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    FlexboxProps,
    BackgroundProps,
    PositionProps,
    GridProps,
    BorderProps,
    BoxShadowProps {}

const Box = styled.div<BoxProps>(
  space,
  layout,
  color,
  flexbox,
  background,
  position,
  grid,
  boxShadow,
  border
);

Box.defaultProps = {
  display: 'flex',
  position: 'relative',
};

export { Box };
