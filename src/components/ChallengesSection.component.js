import {
  FlexWrapper,
  MediumHeadLine,
  SplitLogo,
} from '../utils/constants/styledComponentsGlobal.constant';
import split from '../assets/split.png';

function ChallengesSection() {
  return (
    <FlexWrapper
      height='100vh'
      backgroundColor='lightPurple'
      flexDirection='column'
    >
      <MediumHeadLine color='darkPurple'> THE CHALLENGES</MediumHeadLine>
      <FlexWrapper height='15vh'>
        <MediumHeadLine color='turquoise'>DATA</MediumHeadLine>
        <SplitLogo height='5rem' src={split} />
      </FlexWrapper>
      <FlexWrapper height='15vh'>
        <MediumHeadLine color='turquoise'>PAYMENTS</MediumHeadLine>
        <SplitLogo height='5rem' src={split} />
      </FlexWrapper>
      <FlexWrapper height='15vh'>
        <MediumHeadLine color='turquoise'>MOBILE</MediumHeadLine>
        <SplitLogo height='5rem' src={split} />
      </FlexWrapper>
      <FlexWrapper height='15vh'>
        <MediumHeadLine color='turquoise'>INTEGRATIONS</MediumHeadLine>
        <SplitLogo height='5rem' src={split} />
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default ChallengesSection;
