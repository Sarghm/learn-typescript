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
    <Box
      ref={containerRef}
      {...rest}
      height={height}
      borderRadius="sm"
      overflow="hidden"
    >
      <iframe
        title="TypeScript Course Introduction Video"
        style={{ position: 'relative', width: '100%', height: '100%' }}
        src="https://player.vimeo.com/video/470760699"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export { VideoPlayer };
