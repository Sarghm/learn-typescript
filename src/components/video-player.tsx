import React, { useRef, useState, useEffect } from 'react';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { Box, BoxProps } from './box';

interface VideoPlayerProps extends Omit<BoxProps, 'children' | 'color'> {
  aspectRatio: number;
  vimeoId: string;
  title: string;
  onPlay?: () => void;
}

const VideoPlayer = ({
  aspectRatio,
  vimeoId,
  title,
  onPlay,
  ...rest
}: VideoPlayerProps) => {
  const { currentSize } = useScreenDimensionsContext();
  const [height, setHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    setHeight(containerRef.current.clientWidth * aspectRatio);
  }, [aspectRatio, currentSize]);

  return (
    <Box
      ref={containerRef}
      {...rest}
      height={height}
      borderRadius="sm"
      overflow="hidden"
    >
      <iframe
        title={title}
        style={{ position: 'relative', width: '100%', height: '100%' }}
        src={`https://player.vimeo.com/video/${vimeoId}`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        onPlay={onPlay}
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export { VideoPlayer };
