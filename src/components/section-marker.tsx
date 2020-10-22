import React from 'react';
import { useEffect, useRef } from 'react';
import { Section } from '../consts/sections';
import { useScrollContext } from '../context/scroll';
import { Box } from './box';

interface SectionMarkerProps {
  id: Section;
}

const SectionMarker = ({ id }: SectionMarkerProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const { setSectionOffset } = useScrollContext();

  useEffect(() => {
    setSectionOffset(
      id,
      (boxRef.current?.getBoundingClientRect().top || 0) +
        document.documentElement.scrollTop
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, boxRef.current]);

  return (
    <Box ref={boxRef}>
      <div id={id} />
    </Box>
  );
};

export { SectionMarker };
