import styled from 'styled-components';
import {
  FlexWrapper,
  BigHeadLine,
  MediumHeadLine,
  SplitLogo,
} from '../utils/constants/styledComponentsGlobal.constant';
import coins1 from '../assets/coins1.png';
import coins2 from '../assets/coins2.png';
import coins3 from '../assets/coins3.png';
import split from '../assets/dots.png';


function AwardsSection() {
  return (
    <FlexWrapper
      flexDirection='column'
      height='80vh'
      backgroundColor='gray'
      padding='3.5rem 0 2rem 0'
    >
      <BigHeadLine mediaFontSize='7rem' color='black'> Awards </BigHeadLine>
      <AwardWrapper height='auto'>
        <MediumHeadLine color='blue' mediaFontSize='4rem' >7,000₪</MediumHeadLine>
        <SplitLogo height='4rem' src={split} />
        <BigHeadLine mediaFontSize='6rem' color='pink'> 1 </BigHeadLine>
        <SplitLogo heightMobile='6rem' height='10rem' src={coins1} />
      </AwardWrapper>
      <AwardWrapper height='auto'>
        <MediumHeadLine color='blue' mediaFontSize='4rem' >4,000₪</MediumHeadLine>
        <SplitLogo height='4rem' src={split} />
        <BigHeadLine mediaFontSize='6rem' color='pink'> 2 </BigHeadLine>
        <SplitLogo heightMobile='6rem' height='10rem' src={coins2} />
      </AwardWrapper>
      <AwardWrapper height='auto'>
        <MediumHeadLine mediaFontSize='4rem' color='blue'>2,000₪</MediumHeadLine>
        <SplitLogo height='4rem' src={split} />
        <BigHeadLine mediaFontSize='6rem' color='pink'> 3 </BigHeadLine>
      <SplitLogo heightMobile='6rem' marginLeft='1.5rem' height='10rem' src={coins3} />
      </AwardWrapper>
    </FlexWrapper>
  );
}

const AwardWrapper = styled(FlexWrapper)`
  margin: 0.5rem;
`;

export default AwardsSection;
