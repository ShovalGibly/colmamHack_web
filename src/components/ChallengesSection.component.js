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
      width='100%'
      alignItems="center"
      justifyContent="center"
      padding="5rem 15rem"
      paddingMobile='2rem'
    >
      <MediumHeadLine mediaFontSize="3rem" color='darkPurple' margin='2rem 0 3.5rem 0'> THE CHALLENGES</MediumHeadLine>
      <FlexWrapper flexDirection='column' height='15vh' marginMobile='2rem 0' justifyContent='flex-start' margin="3rem">
        <FlexWrapper justifyContent='flex-start'flexDirectionMobile='column'>
          <MediumHeadLine mediaFontSize="2.5rem" width='90%' color='pink'>Cost Optimization</MediumHeadLine>
          <SplitLogo height='3rem' src={split} />
        </FlexWrapper>
        <Text mediaFontSize="2.3rem" mobilewidth='100%' fontSize="2.7rem" margin='0 4rem' textAlign='start' width='100%'>
        Optimize your infrastructure and manage your cloud and resources based on usage.
        </Text>
      </FlexWrapper>
      <FlexWrapper flexDirection='column' height='15vh' marginMobile='2rem 0' justifyContent='flex-start' margin="3rem">
        <FlexWrapper justifyContent='flex-start'>
          <MediumHeadLine mediaFontSize="2.5rem" width='90%' color='pink'>Security and Data</MediumHeadLine>
          <SplitLogo height='3rem' src={split} />
        </FlexWrapper>
        <Text mediaFontSize="2.3rem" mobilewidth='100%' fontSize="2.7rem" margin='0 4rem' textAlign='start' width='100%'>
        Create solutions for protecting data and running environments.
        </Text>
      </FlexWrapper>
      <FlexWrapper flexDirection='column' height='15vh' marginMobile='2rem 0' justifyContent='flex-start'>
        <FlexWrapper justifyContent='flex-start'>
          <MediumHeadLine mediaFontSize="2.5rem" width='90%' color='pink'>Automation and Tools</MediumHeadLine>
          <SplitLogo height='3rem' src={split} />
        </FlexWrapper>
        <Text mediaFontSize="2.3rem" mobilewidth='100%' fontSize="2.7rem" margin='0 4rem' textAlign='start' width='100%'>
        Enhance spot automation capabilities and build dev operation tools.
        </Text>
      </FlexWrapper>
    </FlexWrapper>
  );
}


export default ChallengesSection;
