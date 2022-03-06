import styled from 'styled-components';
import {
  FlexWrapper,
  Space,
  Text,
} from '../utils/constants/styledComponentsGlobal.constant';
import logoSpotByNetapp from '../assets/spot_logo .png';
import logoColman from '../assets/logo-colman.png';
import logoAguda from '../assets/logo-aguda.png';

function SponserSection() {
  return (
    <FlexWrapper height='70vh' backgroundColor='white' flexDirection='column'  padding='3.5rem 0 2rem 0'>
      <Text
        dir='rtl'
        fontSize='3rem'
        color='black'
        textAlign='center'
        mediaFontSize= '3rem'
      >
הפרסים והתחרות בחסות חברת Spot by Netapp
בהשתתפות הפקולטה למדעי המחשב ואגודת הסטודנטים

      </Text>
     
      <FlexWrapper width='90%' height='auto' wrap>
        <Logo src={logoAguda} style={{height: '8rem'}} />
        <Logo src={logoColman} />
        <Logo src={logoSpotByNetapp} />
      </FlexWrapper>
      <Text fontSize='1.8rem' mediaMargin='2rem 0 0 0' mediaFontSize='1.7rem' color='black' textAlign='center'>
      Spot by Netapp is Leading the way to application-driven infrastructures Automating and optimizing cloud infrastructure to deliver availability and performance at the lowest possible cost.  </Text>
    </FlexWrapper>
  );
}

const Logo = styled.img`
  height: 14rem;
  width:30rem;

  @media screen and (max-width: 550px) {
    height: 11rem;
    width: 13.2rem;
  }
`;

const LogoColman = styled.img`
  position: relative;
  height: 12rem;

  @media screen and (max-width: 550px) {
    height: 5rem;
  }
`;

export default SponserSection;
