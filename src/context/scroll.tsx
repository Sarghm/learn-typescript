import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
  useRef,
} from 'react';
import { Section } from '../consts/sections';
import { AnalyticEvent, useAnalyticsContext } from './analytics';

const VISIBILITY_HEIGHT_RANGE = window.innerHeight / 2;

interface ScrollContextProps {
  children?: React.ReactNode;
}

const ScrollContext = createContext<{
  activeSection: Section | null;
  scrollToSection: (section: Section) => void;
  setSectionOffset: (id: Section, offset: number) => void;
}>({
  activeSection: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  scrollToSection: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSectionOffset: () => {},
});

const ScrollContextProvider = ({ children }: ScrollContextProps) => {
  const { logEvent } = useAnalyticsContext();
  const sectionOffsets = useRef<Record<string, number>>({});
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    window.scrollTo({
      top: sectionOffsets.current[sectionId] - VISIBILITY_HEIGHT_RANGE,
      behavior: 'smooth',
    });
  }, []);

  const handleScrolled = useCallback(() => {
    const currentYPositionWithOffset = window.scrollY + window.innerHeight / 2;
    Object.keys(sectionOffsets.current).forEach((key: string) => {
      const offset = sectionOffsets.current[key];
      const isVisible =
        currentYPositionWithOffset > offset - VISIBILITY_HEIGHT_RANGE &&
        currentYPositionWithOffset < offset + VISIBILITY_HEIGHT_RANGE;
      if (isVisible) setActiveSection(key as Section);
    });
  }, [sectionOffsets]);

  const setSectionOffset = useCallback(
    (id: Section, offset: number) => {
      sectionOffsets.current = { ...sectionOffsets.current, [id]: offset };
    },
    [sectionOffsets]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScrolled, false);
    handleScrolled();
    return () => window.removeEventListener('scroll', handleScrolled, false);
  }, [handleScrolled]);

  useEffect(() => {
    logEvent(AnalyticEvent.ViewedSection, {
      sectionId: activeSection || 'No Section',
    });
  }, [activeSection, logEvent]);

  return (
    <ScrollContext.Provider
      value={{
        activeSection,
        scrollToSection,
        setSectionOffset,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

const useScrollContext = () => useContext(ScrollContext);

export { ScrollContextProvider, useScrollContext };
