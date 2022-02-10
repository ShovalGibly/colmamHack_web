import styled from 'styled-components';
import {
  ExtraHeadLine,
  FlexWrapper,
  MediumHeadLine,
  SplitLogo,
  SizedHeadLine,
} from '../utils/constants/styledComponentsGlobal.constant';
import split from '../assets/dots.png';

function InfoSection() {
  return (
    <FlexWrapper backgroundColor='darkPurple' height='100vh' id='info'>
      <InfoWrapper flexDirection='column' alignItems='flex-end' width='auto'>
        <MediumHeadLine color='pink'>who?</MediumHeadLine>
        <SizedHeadLine dir='rtl' color='black' size={3}>
          צוותים של סטודנטים למדעי המחשב במכללה למנהל המעוניינים ליצור פרויקטים
          ולאתגר את עצמם.
        </SizedHeadLine>
        <MediumHeadLine color='pink'>when?</MediumHeadLine>
        <SizedHeadLine dir='rtl' color='black' size={3}>
          03-04.4.2022 ויום הכנה בX
        </SizedHeadLine>
        <MediumHeadLine color='pink'>where?</MediumHeadLine>
        <SizedHeadLine dir='rtl' color='black' size={3}>
          במכללה בהתאם להנחיות התו הסגול (גם ללא מחוסנים)
        </SizedHeadLine>
        <MediumHeadLine color='pink'>what?</MediumHeadLine>
        <SizedHeadLine dir='rtl' color='black' size={3}>
          בניית פרויקטים בצוותים בנושא שיפור חוויות הקנייה בדיגיטל.
        </SizedHeadLine>
      </InfoWrapper>
      <SectionHeadLine>
        <ExtraHeadLine color='blue' >info</ExtraHeadLine>
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
    padding: 0 1.5rem;
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
