import React from 'react';
import { IntroductionSection } from './sections/introduction';
import { AppHeader } from './components/app-header';
import { CourseChecklistSection } from './sections/course-checklist';
import { WhyTypeScriptSection } from './sections/why-typescript';
import { CourseBreakdownSection } from './sections/course-breakdown';
import { TestimonialsSection } from './sections/testimonials';
import { OfferSection } from './sections/offer';
import { PurchaseSection } from './sections/purchase';
import { AuthorIntroductionSection } from './sections/author-introduction';
import { WobblyLine, WobblyLineProps } from './components/wobbly-line';
import { useScreenDimensionsContext } from './context/screen-dimensions';
import { useMemo } from 'react';
import { PurchasePrompt } from './components/purchase-prompt';
import { useScrollContext } from './context/scroll';
import { Section } from './consts/sections';

const AppContent = () => {
  const { currentSize } = useScreenDimensionsContext();
  const { activeSection } = useScrollContext();

  const wobblyLineWidthProps: Pick<
    WobblyLineProps,
    'customWidthPercentage'
  > = useMemo(
    () =>
      currentSize === 'xs'
        ? { customWidthPercentage: 200 }
        : { customWidthPercentage: undefined },
    [currentSize]
  );
  return (
    <>
      <AppHeader />
      <IntroductionSection />
      <WobblyLine
        backgroundColor="white"
        foregroundColor="black"
        {...wobblyLineWidthProps}
      />
      <CourseChecklistSection />
      <WobblyLine
        backgroundColor="black"
        foregroundColor="pink"
        {...wobblyLineWidthProps}
      />
      <WhyTypeScriptSection />
      <WobblyLine
        backgroundColor="pink"
        foregroundColor="white"
        {...wobblyLineWidthProps}
      />
      <CourseBreakdownSection />
      <WobblyLine
        backgroundColor="white"
        foregroundColor="green"
        {...wobblyLineWidthProps}
      />
      <TestimonialsSection />
      <WobblyLine
        backgroundColor="green"
        foregroundColor="black"
        {...wobblyLineWidthProps}
      />
      <AuthorIntroductionSection />
      <WobblyLine
        backgroundColor="black"
        foregroundColor="white"
        {...wobblyLineWidthProps}
      />
      <OfferSection />
      <WobblyLine
        backgroundColor="white"
        foregroundColor="pink"
        {...wobblyLineWidthProps}
      />
      <PurchaseSection />
      <PurchasePrompt visible={activeSection !== Section.Introduction} />
    </>
  );
};

export { AppContent };
