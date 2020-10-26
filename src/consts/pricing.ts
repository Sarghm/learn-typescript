import { Region } from '../utils/get-region';

export const PRICING = {
  [Region.UK]: {
    fullPrice: '£19.99',
    salePrice: '£9.99',
    salePriceNoSymbol: '9.99',
  },
  [Region.US]: {
    fullPrice: '$21.99',
    salePrice: '$10.99',
    salePriceNoSymbol: '10.99',
  },
};
