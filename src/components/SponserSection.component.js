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
        width='60%'
        fontSize='3rem'
        color='black'
        textAlign='center'
      >
הפרסים והתחרות בחסות חברת Netapp
      </Text>
      <Text
        dir='rtl'
        width='60%'
        fontSize='3rem'
        color='black'
        textAlign='center'
      >
בהשתתפות בית הספר למדעי המחשב ואגודת הסטודנטים
      </Text>
      <FlexWrapper width='63%' height='auto' justifyContent='space-between' wrap>
        <Logo src={logoAguda} style={{height: '8rem'}} />
        <Logo src={logoSpotByNetapp} />
        <Logo src={logoColman} />
      </FlexWrapper>
      <Text width='63%' color='black' textAlign='justify'>
      NetApp is a proven leader when it comes to modernizing and simplifying your storage environment. From simple, smart, trusted storage for shared NAS and SAN environments to arrays built for dedicated, high-bandwidth applications like data analytics and disk-based backup, we work with you to design the perfect solution.
      </Text>
    </FlexWrapper>
  );
}

const Logo = styled.img`
  height: 14rem;
  width:30rem;

  @media screen and (max-width: 550px) {
    height: 13rem;
    width: 20rem;
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
