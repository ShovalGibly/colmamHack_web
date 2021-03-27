import styled from 'styled-components';
import {
  FlexWrapper,
  BigHeadLine,
  Text,
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
        <Text>
          בית הספר למדעי המחשב בשיתוף חברת ספליט איט מזמינים אותכם/ן סטודנטים
          לקחת חלק בהאקתון מאתגר בן עשרים ושש שעות בו תתעסקו יחד עם נציגי חברת
          ספליט איט
        </Text>
        <SplitLogo height='10rem' src={split} />
        <BigHeadLine color='turquoise'> 1 </BigHeadLine>
      </AwardWrapper>
      <AwardWrapper height='auto'>
        <Text>
          בית הספר למדעי המחשב בשיתוף חברת ספליט איט מזמינים אותכם/ן סטודנטים
          לקחת חלק בהאקתון מאתגר בן עשרים ושש שעות בו תתעסקו יחד עם נציגי חברת
          ספליט איט
        </Text>
        <SplitLogo height='10rem' src={split} />
        <BigHeadLine color='turquoise'> 2 </BigHeadLine>
      </AwardWrapper>
      <AwardWrapper height='auto'>
        <Text>
          בית הספר למדעי המחשב בשיתוף חברת ספליט איט מזמינים אותכם/ן סטודנטים
          לקחת חלק בהאקתון מאתגר בן עשרים ושש שעות בו תתעסקו יחד עם נציגי חברת
          ספליט איט
        </Text>
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
