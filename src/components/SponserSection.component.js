import styled from 'styled-components';
import {
  FlexWrapper,
  Space,
  Text,
} from '../utils/constants/styledComponentsGlobal.constant';
import logoSplitIt from '../assets/logo-split-it.png';
import logoColman from '../assets/logo-colman.png';

function SponserSection() {
  return (
    <FlexWrapper height='70vh' backgroundColor='white' flexDirection='column'>
      <Text
        dir='rtl'
        width='80%'
        fontSize='3rem'
        color='darkPurpil'
        textAlign='center'
      >
        הפרסים והתחרות בחסות חברת ספליט איט בהשתתפות בית הספר למדעי המחשב ואגודת
        הסטודנטים
      </Text>
      <FlexWrapper height='auto' justifyContent='space-around'>
        <Logo src={logoSplitIt} />
        <LogoColman src={logoColman} />
      </FlexWrapper>
      <Text width='50%' color='darkPurpil' textAlign='justify'>
        Splitit is a global payment solution provider that enables shoppers to
        use the credit they’ve earned by breaking up purchases into monthly
        interest-free installments, using their existing credit card. Splitit
        enables merchants to improve conversion rates and increase average order
        value by giving customers an easy and fast way to pay for purchases over
        time without requiring additional approvals. Serving many of Internet
        Retailer’s top 500 merchants, Splitit’s global footprint extends to
        thousands of merchants in countries around the world. Headquartered in
        New York, Splitit has an R&D center in Israel and offices in London and
        Australia. The company is listed on the Australian Securities Exchange
        (ASX) under ticker code SPT.
      </Text>
    </FlexWrapper>
  );
}

const Logo = styled.img`
  position: relative;
  height: 30rem;

  @media screen and (max-width: 550px) {
    height: 13rem;
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
