import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from 'react';
import { Section } from '../consts/sections';
import { useScreenDimensionsContext } from './screen-dimensions';

interface ScrollContextProps {
  children?: React.ReactNode;
}

const ScrollContext = createContext<{
  currentYPosition: number;
  activeSection: Section | null;
  setActiveSection: (activeSection: Section | null) => void;
  scrollToSection: (section: Section) => void;
}>({
  currentYPosition: 0,
  activeSection: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActiveSection: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  scrollToSection: () => {},
});

const ScrollContextProvider = ({ children }: ScrollContextProps) => {
  const [currentYPosition, setCurrentYPosition] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const { currentSize } = useScreenDimensionsContext();

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const navigationBar = document.getElementById('navigationBar');
      const element = document.getElementById(sectionId);
      if (!element || !navigationBar) return;
      window.scrollTo({
        top:
          element.offsetTop -
          navigationBar.clientHeight -
          (currentSize === 'xs' ? 20 : 50),
        behavior: 'smooth',
      });
    },
    [currentSize]
  );

  const handleScrolled = useCallback(() => {
    setCurrentYPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrolled);
    handleScrolled();
    return () => window.removeEventListener('scroll', handleScrolled);
  }, [handleScrolled]);

  return (
    <ScrollContext.Provider
      value={{
        currentYPosition,
        activeSection,
        setActiveSection,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

const useScrollContext = () => useContext(ScrollContext);

export { ScrollContextProvider, useScrollContext };
