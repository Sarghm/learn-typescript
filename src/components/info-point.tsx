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
      <Box flexDirection="row">
        {icon ? <Box mr="one">{icon}</Box> : null}
        <Typography textStyle="h3Light" color={titleColor}>
          {title}
        </Typography>
      </Box>
      <Typography textStyle="body" color={descriptionColor}>
        {description}
      </Typography>
    </Box>
  );
};

export { InfoPoint };
