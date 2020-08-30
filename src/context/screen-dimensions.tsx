import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from 'react';
import { DimensionType, ResponsiveSize } from '../utils/dimensions';
import { theme } from '../theme';

interface ScreenDimensionsContextProps {
  children?: React.ReactNode;
}

const getWindowDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const determineSize = (dimensions: DimensionType): ResponsiveSize => {
  if (dimensions.width < theme.grid.breakpoints[0]) return 'xs';
  if (dimensions.width < theme.grid.breakpoints[1]) return 'sm';
  if (dimensions.width < theme.grid.breakpoints[2]) return 'md';
  return 'lg';
};

const ScreenDimensionsContext = createContext<{
  currentDimensions: DimensionType;
  currentSize: 'xs' | 'sm' | 'md' | 'lg';
}>({
  currentDimensions: getWindowDimensions(),
  currentSize: determineSize(getWindowDimensions()),
});

const ScreenDimensionsContextProvider = ({
  children,
}: ScreenDimensionsContextProps) => {
  const [currentDimensions, setCurrentDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const handleDimensionsChanged = useCallback(() => {
    setCurrentDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleDimensionsChanged);
    handleDimensionsChanged();

    return () => window.removeEventListener('resize', handleDimensionsChanged);
  }, [handleDimensionsChanged]);

  if (!currentDimensions) return null;

  const values = {
    currentDimensions,
    currentSize: determineSize(currentDimensions),
  };

  return (
    <ScreenDimensionsContext.Provider value={values}>
      {children}
    </ScreenDimensionsContext.Provider>
  );
};

const useScreenDimensionsContext = () => useContext(ScreenDimensionsContext);

export { ScreenDimensionsContextProvider, useScreenDimensionsContext };
