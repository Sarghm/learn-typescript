import React, { useContext, createContext, useMemo } from 'react';
import styled from 'styled-components';
import {
  responsiveValue,
  ResponsiveProps,
  ResponsiveSize,
} from '../utils/dimensions';
import { theme } from '../theme';
import { Box, BoxProps } from './box';

const GRID_MAX_WIDTH = `${theme.grid.maxWidth}px`;

export const DEFAULT_XS_GRID_GUTTER = 16;
export const DEFAULT_SM_GRID_GUTTER = 20;
export const DEFAULT_MD_GRID_GUTTER = 40;

export const DEFAULT_XS_GRID_MARGIN = 0;
export const DEFAULT_SM_GRID_MARGIN = 20;
export const DEFAULT_MD_GRID_MARGIN = 40;

interface GridContainerProps extends ResponsiveProps {
  children: React.ReactNode;
  currentSize: ResponsiveSize;
  gridMargin?: { [size in ResponsiveSize]?: number };
  gridGutter?: { [size in ResponsiveSize]?: number };
  gridColumns?: { [size in ResponsiveSize]?: number };
}

interface GridColumnProps extends Omit<BoxProps, 'children' | 'color'> {
  span?: number;
  offset?: number;
  children: React.ReactNode;
}

interface GridRowProps extends Omit<BoxProps, 'children' | 'color'> {
  children: React.ReactNode;
  wrap?: 'wrap' | 'auto';
  withGutter?: boolean;
}

const GridContext = createContext<{
  gridMargin: number;
  gridGutter: number;
  gridColumns: number;
}>({
  gridMargin: 0,
  gridGutter: 0,
  gridColumns: 0,
});

const GridContainer = ({
  currentSize,
  children,
  gridGutter: customGridGutter,
  gridMargin: customGridMargin,
  gridColumns: customGridColumns,
}: GridContainerProps) => {
  const gridGutter = useMemo(
    () =>
      responsiveValue(
        currentSize,
        customGridGutter?.xs || DEFAULT_XS_GRID_GUTTER,
        customGridGutter?.sm || DEFAULT_SM_GRID_GUTTER,
        customGridGutter?.md || DEFAULT_MD_GRID_GUTTER,
        customGridGutter?.lg
      ),
    [currentSize, customGridGutter]
  );
  const gridMargin = useMemo(
    () =>
      responsiveValue(
        currentSize,
        customGridMargin?.xs || DEFAULT_XS_GRID_MARGIN,
        customGridMargin?.sm || DEFAULT_SM_GRID_MARGIN,
        customGridMargin?.md || DEFAULT_MD_GRID_MARGIN,
        customGridMargin?.lg
      ),
    [currentSize, customGridMargin]
  );
  const gridColumns = useMemo(
    () =>
      responsiveValue(
        currentSize,
        customGridColumns?.xs || 4,
        customGridColumns?.sm || 12,
        customGridColumns?.md,
        customGridColumns?.lg
      ),
    [currentSize, customGridColumns]
  );

  const values = { gridGutter, gridMargin, gridColumns };

  return (
    <GridContext.Provider value={values}>
      <Box
        width="100%"
        flexDirection="column"
        maxWidth={GRID_MAX_WIDTH}
        px={gridMargin}
        flexGrow={0}
      >
        {children}
      </Box>
    </GridContext.Provider>
  );
};

const useGridContext = () => useContext(GridContext);

const GridRowContext = createContext<{
  withGutter: boolean;
}>({
  withGutter: false,
});

const StyledGridRow = styled(Box)<
  GridRowProps & { gutter: number; withGutter: boolean }
>`
  flex-grow: 1;
  flex-wrap: ${(props) => props.wrap || 'auto'};
  margin-right: ${(props) => (props.withGutter ? -props.gutter : 0)};
`;

const GridRow = ({
  children,
  withGutter = true,
  flexDirection = 'row',
  ...props
}: GridRowProps) => {
  const { gridGutter } = useGridContext();
  const values = { withGutter };

  return (
    <GridRowContext.Provider value={values}>
      <StyledGridRow
        {...props}
        flexDirection={flexDirection}
        gutter={gridGutter}
        withGutter={withGutter}
      >
        {children}
      </StyledGridRow>
    </GridRowContext.Provider>
  );
};

const useGridRowContext = () => useContext(GridRowContext);

const StyledGridColumn = styled(Box)<{
  span: number;
  gutter: number;
  columns: number;
}>`
  flex-direction: column;
  flex-basis: ${(props) => (props.span / 12) * 100}%;
  padding-right: ${(props) => props.gutter}px;

  flex-shrink: 1;
`;

const GridColumn = ({ children, span = 12, offset = 0 }: GridColumnProps) => {
  const { gridColumns, gridGutter } = useGridContext();
  const { withGutter } = useGridRowContext();
  return (
    <>
      {offset ? (
        <StyledGridColumn
          span={offset}
          gutter={withGutter ? gridGutter : 0}
          columns={gridColumns}
        />
      ) : null}
      <StyledGridColumn
        span={span}
        columns={gridColumns}
        gutter={withGutter ? gridGutter : 0}
      >
        {children}
      </StyledGridColumn>
    </>
  );
};

export { GridContainer, GridColumn, GridRow };
