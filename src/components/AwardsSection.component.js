import styled from 'styled-components';
import {
  FlexWrapper,
  BigHeadLine,
  MediumHeadLine,
  SplitLogo,
} from '../utils/constants/styledComponentsGlobal.constant';
import split from '../assets/dots.png';

function AwardsSection() {
  return (
    <FlexWrapper
      flexDirection='column'
      height='70vh'
      backgroundColor='gray'
      padding='3.5rem 0 2rem 0'
    >
      <BigHeadLine mediaFontSize='7rem' color='black'> Awards </BigHeadLine>
      <AwardWrapper height='auto'>
        <MediumHeadLine color='blue' mediaFontSize='4rem' >7,000₪</MediumHeadLine>
        <SplitLogo height='4rem' src={split} />
        <BigHeadLine mediaFontSize='6rem' color='pink'> 1 </BigHeadLine>
      </AwardWrapper>
      <AwardWrapper height='auto'>
        <MediumHeadLine color='blue' mediaFontSize='4rem' >4,000₪</MediumHeadLine>
        <SplitLogo height='4rem' src={split} />
        <BigHeadLine mediaFontSize='6rem' color='pink'> 2 </BigHeadLine>
      </AwardWrapper>
      <AwardWrapper height='auto'>
        <MediumHeadLine mediaFontSize='4rem' color='blue'>2,000₪</MediumHeadLine>
        <SplitLogo height='4rem' src={split} />
        <BigHeadLine color='pink'> 3 </BigHeadLine>
      </AwardWrapper>
    </FlexWrapper>
  );
}

const AwardWrapper = styled(FlexWrapper)`
  margin: 0.5rem;
`;

export default AwardsSection;
