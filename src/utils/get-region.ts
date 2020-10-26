export enum Region {
  UK = 'UK',
  US = 'US',
}

const getRegion = (): Region => {
  let region: Region = Region.UK;
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) throw new Error();
    if (tz.includes('London')) region = Region.UK;
    else if (tz.includes('America')) region = Region.US;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(
      'Could not determine country code from browser language settings'
    );
  }

  return region;
};

export { getRegion };
