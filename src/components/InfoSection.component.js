import styled from "styled-components";
import {
  ExtraHeadLine,
  FlexWrapper,
  MediumHeadLine,
  SplitLogo,
  SizedHeadLine,
} from "../utils/constants/styledComponentsGlobal.constant";
import split from "../assets/dots.png";

function InfoSection() {
  return (
    <FlexWrapper backgroundColor="darkPurple" height="80vh" id="info" padding='3.5rem 0 2rem 0'>
      <InfoWrapper flexDirection="column" alignItems="flex-end" width="auto">
        <MediumHeadLine mediaFontSize='2.8rem' color="pink"> WHO?</MediumHeadLine>
        <SizedHeadLine dir="rtl" color="black" size={2.3}>
          צוותים של סטודנטים למדעי המחשב במכללה למנהל המעוניינים ליצור פרויקטים
          ולאתגר את עצמם.
        </SizedHeadLine>
        <MediumHeadLine mediaFontSize='2.8rem' color="pink">WHEN?</MediumHeadLine>
        <SizedHeadLine dir="rtl" color="black" size={2.3}>
          03-04.4.2022
        </SizedHeadLine>
        <MediumHeadLine mediaFontSize='2.8rem' color="pink">WHERE? </MediumHeadLine>
        <SizedHeadLine dir="rtl" color="black"size={2.3}>
          במכללה בהתאם להנחיות התו הסגול (גם ללא מחוסנים).
        </SizedHeadLine>
<<<<<<< HEAD
        <MediumHeadLine color="pink">WHAT?</MediumHeadLine>
        <SizedHeadLine dir="rtl" color="black" size={2.5}>
        ספוט מזמינה אותכן/ם להשתתף בהאקטון ולהתמודד עם חלק מהאתגרים הגדולים שניצבים היום בעבודה בסביבות ענן, אופטימיזציה של משאבים, סביבות ריצה גדולות וללמוד על הפתרונות המובילים של ספוט.
       </SizedHeadLine>
=======
        <MediumHeadLine mediaFontSize='2.8rem' color="pink">WHAT?</MediumHeadLine>
        <SizedHeadLine dir="rtl" color="black" size={2.3}>
        בניית פרויקטים בנושא של אופטימיזציית מחשוב ענן ועבודה בסקיילים גדולים.        </SizedHeadLine>
>>>>>>> 2979b8a2eedbde37b827ea56417a9f8c1ce0535e
      </InfoWrapper>
      <SectionHeadLine>
        <ExtraHeadLine color="blue">info</ExtraHeadLine>
        <SplitLogo src={split} />
      </SectionHeadLine>
    </FlexWrapper>
  );
}

const InfoWrapper = styled(FlexWrapper)`
  position: relative;
  left: 20rem;
  padding: 1rem 0;

  @media screen and (max-width: 550px) {
    left: 0;
    padding: 0 1.5rem;
    position: absolute;
    top:0

  }
`;

const SectionHeadLine = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  margin: 7rem 0 0 0;
  transform: rotate(270deg) translateX(-20px);

  @media screen and (max-width: 550px) {
    transform: none;
    position: absolute;
    top: 0;
    left: 3rem;
  }
`;

export default InfoSection;
