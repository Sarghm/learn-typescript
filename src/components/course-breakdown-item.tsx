import { CheckCircleOutline } from 'heroicons-react';
import React from 'react';
import { DefaultTheme } from 'styled-components';
import { DEFAULT_ICON_SIZE_SM } from '../consts/icons';
import { CourseSectionPoint } from '../sections/course-breakdown';
import { theme } from '../theme';
import { Box } from './box';
import { Typography } from './typography';

interface CourseBreakdownItemProps {
  point: CourseSectionPoint;
  mt?: keyof DefaultTheme['space'];
}

const CourseBreakdownItem = ({
  point: { title, length },
  mt,
}: CourseBreakdownItemProps) => {
  return (
    <li>
      <Box mt={mt} flexDirection="row">
        <Box mr="ten">
          <CheckCircleOutline
            size={DEFAULT_ICON_SIZE_SM}
            color={theme.colors.green}
          />
        </Box>
        <Box>
          <Typography textStyle="body" color="black">
            {title}
          </Typography>
          <Box ml="ten">
            <Typography textStyle="body" color="black-sixty">
              {length}
            </Typography>
          </Box>
        </Box>
      </Box>
    </li>
  );
};

export { CourseBreakdownItem };
