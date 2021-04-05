import styled from 'styled-components';
import {
  ExtraHeadLine,
  FlexWrapper,
  MediumHeadLine,
  SplitLogo,
  SmallHeadLine,
} from '../utils/constants/styledComponentsGlobal.constant';
import split from '../assets/split.png';

function InfoSection() {
  return (
    <FlexWrapper backgroundColor='darkPurple' height='100vh' id='info'>
      <InfoWrapper flexDirection='column' alignItems='flex-end' width='auto'>
        <MediumHeadLine color='turquoise'>who?</MediumHeadLine>
        <SmallHeadLine dir='rtl' color='white'>
          צוותים של סטודנטים למדעי המחשב במכללה למנהל המעוניינים ליצור פרויקטים
          ולאתגר את עצמם.
        </SmallHeadLine>
        <MediumHeadLine color='turquoise'>when?</MediumHeadLine>
        <SmallHeadLine dir='rtl' color='white'>
          25-26.4.2021
        </SmallHeadLine>
        <MediumHeadLine color='turquoise'>where?</MediumHeadLine>
        <SmallHeadLine dir='rtl' color='white'>
          מומלץ לקבוצות להפגש במקום אחד שבו יוכלו לעבוד ביחד.
        </SmallHeadLine>
        <MediumHeadLine color='turquoise'>what?</MediumHeadLine>
        <SmallHeadLine dir='rtl' color='white'>
          בניית פרויקטים בצוותים בנושא שיפור חוויות הקנייה בדיגיטל.
        </SmallHeadLine>
      </InfoWrapper>
      <SectionHeadLine>
        <ExtraHeadLine>info</ExtraHeadLine>
        <SplitLogo src={split} />
      </SectionHeadLine>
    </FlexWrapper>
  );
}

const InfoWrapper = styled(FlexWrapper)`
  position: relative;
  left: 20rem;

  @media screen and (max-width: 550px) {
    left: 0;
  }
`;

const SectionHeadLine = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  transform: rotate(270deg) translateX(-20px);

  @media screen and (max-width: 550px) {
    position: absolute;
    transform: none;
    top: 2rem;
    left: 2rem;
  }
`;

export default InfoSection;
