import React from 'react';
import { Box } from './box';
import { Typography } from './typography';
import { DefaultTheme } from 'styled-components';

export interface InfoPointProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  titleColor?: keyof DefaultTheme['colors'];
  descriptionColor?: keyof DefaultTheme['colors'];
}

const InfoPoint = ({
  title,
  description,
  icon,
  titleColor = 'black',
  descriptionColor = 'black',
}: InfoPointProps) => {
  return (
    <Box flexDirection="column">
      <Box flexDirection="row" alignItems="center">
        {icon ? <Box mr="fifteen">{icon}</Box> : null}
        <Typography
          textStyle="h3Light"
          color={titleColor}
          style={{ wordBreak: 'break-word' }}
        >
          {title}
        </Typography>
      </Box>
      <Box mt="ten">
        <Typography
          textStyle="body"
          color={descriptionColor}
          style={{ wordBreak: 'break-word' }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export { InfoPoint };
