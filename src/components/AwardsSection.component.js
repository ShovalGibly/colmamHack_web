import styled from 'styled-components';
import {
  FlexWrapper,
  BigHeadLine,
  MediumHeadLine,
  SplitLogo,
} from '../utils/constants/styledComponentsGlobal.constant';
import split from '../assets/split.png';

function AwardsSection() {
  return (
    <FlexWrapper
      flexDirection='column'
      height='100vh'
      backgroundColor='darkPurple'
    >
      <BigHeadLine color='white'> Awards </BigHeadLine>
      <AwardWrapper height='auto'>
        <MediumHeadLine>6,000₪</MediumHeadLine>
        <SplitLogo height='10rem' src={split} />
        <BigHeadLine color='turquoise'> 1 </BigHeadLine>
      </AwardWrapper>
      <AwardWrapper height='auto'>
        <MediumHeadLine>3,000₪</MediumHeadLine>
        <SplitLogo height='10rem' src={split} />
        <BigHeadLine color='turquoise'> 2 </BigHeadLine>
      </AwardWrapper>
      <AwardWrapper height='auto'>
        <MediumHeadLine>1,000₪</MediumHeadLine>
        <SplitLogo height='10rem' src={split} />
        <BigHeadLine color='turquoise'> 3 </BigHeadLine>
      </AwardWrapper>
    </FlexWrapper>
  );
}

const AwardWrapper = styled(FlexWrapper)`
  margin: 3rem;
`;

export default AwardsSection;
