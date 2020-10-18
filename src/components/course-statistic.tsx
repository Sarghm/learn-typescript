import React from 'react';
import { Box, BoxProps } from './box';
import { Typography } from './typography';

interface CourseStatisticProps extends Omit<BoxProps, 'color' | 'children'> {
  title: string;
  icon: React.ReactNode;
}

const CourseStatistic = ({ title, icon, ...rest }: CourseStatisticProps) => {
  return (
    <Box alignItems="center" flexDirection="row" {...rest}>
      <Box mr="ten">{icon}</Box>
      <Typography
        textStyle="h4Light"
        color="black"
        textAlign="center"
        style={{ width: 'max-content' }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export { CourseStatistic };
