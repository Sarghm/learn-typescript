import React, { useCallback, useState } from 'react';
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
import { CookiesPrompt } from './components/cookies-prompt';
import { CODESNAP_COOKIES_POLICY_DISMISSED } from './consts/storage';

const AppContent = () => {
  const [showCookies, setShowCookies] = useState<boolean>(true);
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

  const showCookiesPolicy = useMemo(() => {
    if (window.localStorage.getItem(CODESNAP_COOKIES_POLICY_DISMISSED))
      return false;
    return showCookies;
  }, [showCookies]);

  const handleDismissedCookiesPolicy = useCallback(() => {
    setShowCookies(false);
    window.localStorage.setItem(CODESNAP_COOKIES_POLICY_DISMISSED, 'true');
  }, []);

  return (
    <>
      <AppHeader />
      <IntroductionSection isVisible={activeSection === Section.Introduction} />
      <WobblyLine
        backgroundColor="white"
        foregroundColor="black"
        {...wobblyLineWidthProps}
      />
      <CourseChecklistSection
        isVisible={activeSection === Section.CourseChecklist}
      />
      <WobblyLine
        backgroundColor="black"
        foregroundColor="pink"
        {...wobblyLineWidthProps}
      />
      <WhyTypeScriptSection
        isVisible={activeSection === Section.WhyTypeScript}
      />
      <WobblyLine
        backgroundColor="pink"
        foregroundColor="white"
        {...wobblyLineWidthProps}
      />
      <CourseBreakdownSection
        isVisible={activeSection === Section.CourseBreakdown}
      />
      <WobblyLine
        backgroundColor="white"
        foregroundColor="green"
        {...wobblyLineWidthProps}
      />
      <TestimonialsSection isVisible={activeSection === Section.Testimonials} />
      <WobblyLine
        backgroundColor="green"
        foregroundColor="black"
        {...wobblyLineWidthProps}
      />
      <AuthorIntroductionSection
        isVisible={activeSection === Section.AuthorIntroduction}
      />
      <WobblyLine
        backgroundColor="black"
        foregroundColor="white"
        {...wobblyLineWidthProps}
      />
      <OfferSection isVisible={activeSection === Section.Offer} />
      <WobblyLine
        backgroundColor="white"
        foregroundColor="pink"
        {...wobblyLineWidthProps}
      />
      <PurchaseSection isVisible={activeSection === Section.Purchase} />
      <PurchasePrompt
        visible={
          activeSection !== Section.Introduction &&
          activeSection !== Section.Purchase
        }
      />
      <CookiesPrompt
        visible={showCookiesPolicy}
        onDismiss={handleDismissedCookiesPolicy}
      />
    </>
  );
};

export { AppContent };
