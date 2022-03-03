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
      height='80vh'
      backgroundColor='#1E1E9A'
      flexDirection='column'
    >
      <MediumHeadLine color='darkPurple' margin='2rem 0 3.5rem 0'> THE CHALLENGES</MediumHeadLine>
      <FlexWrapper height='15vh' width='70%' justifyContent='flex-start' flexDirectionMobile='column' marginMobile='2rem 0'>
        <FlexWrapper width='auto'>
          <MediumHeadLine color='pink'>Cost Optimization</MediumHeadLine>
          <SplitLogo height='3rem' src={split} />
        </FlexWrapper>
        <Text fontSize="2.5rem" margin='0 4rem' textAlign='left' width='auto'>
        Optimize your infrastructure and manage your cloud and resources based on usage.
        </Text>
      </FlexWrapper>
      <FlexWrapper height='15vh' width='70%' justifyContent='flex-start' flexDirectionMobile='column' marginMobile='2rem 0'>
        <FlexWrapper width='auto'>
          <MediumHeadLine color='pink'>Security and Data</MediumHeadLine>
          <SplitLogo height='3rem' src={split} />
        </FlexWrapper>
        <Text fontSize="2.5rem" margin='0 4rem' textAlign='left' width='auto'>
        Create solutions for protecting data and running environments.
        </Text>
      </FlexWrapper>
      <FlexWrapper height='15vh' width='70%' justifyContent='flex-start' flexDirectionMobile='column' marginMobile='2rem 0'>
        <FlexWrapper width='auto'>
          <MediumHeadLine color='pink'>Automation and Tools</MediumHeadLine>
          <SplitLogo height='3rem' src={split} />
        </FlexWrapper>
        <Text fontSize="2.5rem"  margin='0 4rem' textAlign='left' width='auto'>
        Enhance spot automation capabilities and build dev operation tools.
        </Text>
      </FlexWrapper>
    </FlexWrapper>
  );
}


export default ChallengesSection;
