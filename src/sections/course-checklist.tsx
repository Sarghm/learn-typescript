import React from 'react';
import { SectionContainer } from '../components/section-container';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { Box } from '../components/box';
import {
  CheckListItem,
  CheckListItemProps,
} from '../components/checklist-item';
import { Typography } from '../components/typography';
import { useScreenDimensionsContext } from '../context/screen-dimensions';

const CHECK_LIST_ITEMS: CheckListItemProps[] = [
  {
    title: 'I already have some JavaScript experience',
    children: `This course has been written with the assumption that you already have some JavaScript experience. You don't have to have much - as long as you have an understanding of variables and functions, you should be totally fine!`,
  },
  {
    title: 'I already have some JavaScript experience',
    children: `This course has been written with the assumption that you already have some JavaScript experience. You don't have to have much - as long as you have an understanding of variables and functions, you should be totally fine!`,
  },
  {
    title: 'I already have some JavaScript experience',
    children: `This course has been written with the assumption that you already have some JavaScript experience. You don't have to have much - as long as you have an understanding of variables and functions, you should be totally fine!`,
  },
];

const CourseChecklist = () => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer backgroundColor="black" py="oneHundred">
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={12}>
            <Typography textStyle="h2" color="white" textAlign="center">
              Is this course for me?
            </Typography>
          </GridColumn>
        </GridRow>

        <GridRow mt="fifty">
          <GridColumn offset={1} span={5}>
            {CHECK_LIST_ITEMS.map((item, i) => (
              <Box key={item.title} mt={i !== 0 ? 'thirty' : undefined}>
                <CheckListItem {...item} />
              </Box>
            ))}
          </GridColumn>

          <GridColumn span={5}>
            <Typography textStyle="h1" color="white">
              An image will go here one day
            </Typography>
          </GridColumn>
        </GridRow>

        <GridRow mt="fifty">
          <GridColumn span={8} offset={2}>
            <Typography textStyle="h2" color="white" textAlign="center">
              If you answered &quot;yes&quot; to all of the above, then this
              course is for you!
            </Typography>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { CourseChecklist };
