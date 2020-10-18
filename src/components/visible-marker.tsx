import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { Section } from '../consts/sections';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { useScrollContext } from '../context/scroll';
import { Box } from './box';

const VISIBILITY_HEIGHT_RANGE = window.innerHeight;

interface VisibleMarkerProps {
  id: Section;
  onVisibilityChanged?: (isVisible: boolean) => void;
}

const VisibleMarker = ({ onVisibilityChanged, id }: VisibleMarkerProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const { currentYPosition, setActiveSection } = useScrollContext();
  const { currentDimensions } = useScreenDimensionsContext();
  const currentYPositionWithOffset = currentYPosition + window.innerHeight / 2;

  const offsetTop = boxRef.current?.getBoundingClientRect().top || 0;

  useEffect(() => {
    if (!boxRef.current) return;
    // Set visible when the offset is larger than currentPos - half the visibility
    // height range AND less than half the currentPos + visibility height range
    setIsVisible(
      offsetTop - VISIBILITY_HEIGHT_RANGE / 2 <= currentYPositionWithOffset &&
        offsetTop + VISIBILITY_HEIGHT_RANGE / 2 >= currentYPositionWithOffset
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxRef.current, currentYPosition, currentDimensions.width]);

  useEffect(() => {
    if (onVisibilityChanged) onVisibilityChanged(isVisible);
    if (isVisible) setActiveSection(id);
  }, [id, isVisible, onVisibilityChanged, setActiveSection]);

  return (
    <Box ref={boxRef}>
      <div id={id} />
    </Box>
  );
};

export { VisibleMarker };
