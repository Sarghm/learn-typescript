export interface DimensionType {
  width: number;
  height: number;
}

export interface ResponsiveProps {
  currentSize: ResponsiveSize;
}

export type ResponsiveSize = 'xs' | 'sm' | 'md' | 'lg';

const responsiveValue = <T extends unknown>(
  currentSize: ResponsiveSize,
  xs: T,
  sm?: T,
  md?: T,
  lg?: T
) => {
  switch (currentSize) {
    case 'xs':
      return xs;
    case 'sm':
      return sm ?? xs;
    case 'md':
      return md ?? sm ?? xs;
    case 'lg':
      return lg ?? md ?? sm ?? xs;
    default:
      return xs;
  }
};

export { responsiveValue };
