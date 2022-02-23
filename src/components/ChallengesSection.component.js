import {
  FlexWrapper,
  MediumHeadLine,
  SplitLogo,
  Text,
} from '../utils/constants/styledComponentsGlobal.constant';
import split from '../assets/dots.png';

function ChallengesSection() {
  return (
    <FlexWrapper
      height='90vh'
      backgroundColor='#1E1E9A'
      flexDirection='column'
    >
      <MediumHeadLine color='darkPurple' margin='2rem 0 3.5rem 0'> THE CHALLENGES</MediumHeadLine>
      <FlexWrapper height='15vh' width='70%' justifyContent='flex-start' flexDirectionMobile='column' marginMobile='2rem 0'>
        <FlexWrapper width='auto'>
          <MediumHeadLine color='pink'>PAYMENTS</MediumHeadLine>
          <SplitLogo height='3rem' src={split} />
        </FlexWrapper>
        <Text margin='0 4rem' textAlign='left' width='auto'>
          Our dependence on the merchant integration limits where shopper’s can use Splitit. How can we enhance this while maintaining a strong user experience? (OTT solution)
          Looking beyond ecommerce merchants, what do we need to develop to enhance our offering for service based companies? 
        </Text>
      </FlexWrapper>
      <FlexWrapper height='15vh' width='70%' justifyContent='flex-start' flexDirectionMobile='column' marginMobile='2rem 0'>
        <FlexWrapper width='auto'>
          <MediumHeadLine color='pink'>MOBILE</MediumHeadLine>
          <SplitLogo height='3rem' src={split} />
        </FlexWrapper>
        <Text margin='0 4rem' textAlign='left' width='auto'>
          Mobile conversion rate is a lot lower than desktop. How can we solve this? 
        </Text>
      </FlexWrapper>
      <FlexWrapper height='15vh' width='70%' justifyContent='flex-start' flexDirectionMobile='column' marginMobile='2rem 0'>
        <FlexWrapper width='auto'>
          <MediumHeadLine color='pink'>INTEGRATIONS</MediumHeadLine>
          <SplitLogo height='3rem' src={split} />
        </FlexWrapper>
        <Text margin='0 4rem' textAlign='left' width='auto'>
          As a SaaS company how can we simplify our integrations to shorten the onboarding/integration time and reduce merchant errors? 
        </Text>
      </FlexWrapper>
      <FlexWrapper height='15vh' width='70%' justifyContent='flex-start' flexDirectionMobile='column' marginMobile='2rem 0'>
        <FlexWrapper width='auto'>
          <MediumHeadLine color='pink'>DATA</MediumHeadLine>
          <SplitLogo height='3rem' src={split} />
        </FlexWrapper>
        <Text margin='0 4rem' textAlign='left' width='auto'>
          We have data coming in from multiple sources, how can we use it to detect anomalies and abnormal patterns , develop reports and
          real time alert system so we can proactively fix and/or inform merchants of problems before they become disasters? 
        </Text>
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default ChallengesSection;
