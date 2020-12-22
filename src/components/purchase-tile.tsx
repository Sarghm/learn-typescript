import React from 'react';
import { Box } from './box';
import { Button } from './button';
import { CheckListItem, CheckListItemProps } from './checklist-item';
import { Typography } from './typography';

export interface PurchaseTileProps {
  title: string;
  items: CheckListItemProps[];
  offer?: React.ReactNode;
  cta: string;
  onPress?: () => void;
  bottomComponent?: React.ReactNode;
}

const PurchaseTile = ({
  title,
  items,
  offer,
  cta,
  onPress,
  bottomComponent,
}: PurchaseTileProps) => {
  return (
    <Box
      borderRadius="sm"
      backgroundColor="white"
      flexDirection="column"
      py="twenty"
      px="fifteen"
      borderColor="pink"
      borderWidth={2}
      borderStyle="solid"
    >
      <Typography textStyle="h2" color="pink" textAlign="center">
        {title}
      </Typography>
      <Box
        alignSelf="stretch"
        backgroundColor="black-twenty"
        height={1}
        my="ten"
      />
      {items.map((el, idx) => (
        <Box mt={idx === 0 ? 'zero' : 'five'} key={el.title}>
          <CheckListItem title={el.title} textColor="black" textStyle="body">
            {el.children}
          </CheckListItem>
        </Box>
      ))}
      <Box
        alignSelf="stretch"
        backgroundColor="black-twenty"
        height={1}
        my="ten"
      />
      <Box flexDirection="column" alignItems="center">
        {offer}

        <Box width="100%" mt="ten">
          <Button flexGrow={1} alignSelf="stretch" onPress={onPress}>
            {cta}
          </Button>
        </Box>
        {bottomComponent}
      </Box>
    </Box>
  );
};

export { PurchaseTile };
