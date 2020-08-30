import React, { useRef, useState, useEffect } from 'react';
import { Box, BoxProps } from './box';

interface VideoPlayerProps extends Omit<BoxProps, 'children' | 'color'> {
  aspectRatio: number;
}

const VideoPlayer = ({ aspectRatio, ...rest }: VideoPlayerProps) => {
  const [height, setHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    setHeight(containerRef.current.clientWidth * aspectRatio);
  }, [aspectRatio]);

  return (
    <Box ref={containerRef} {...rest} height={height} borderRadius="sm"></Box>
  );
};

export { VideoPlayer };
