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
    <FlexWrapper backgroundColor="darkPurple" height="60vh" id="info">
      <InfoWrapper flexDirection="column" alignItems="flex-end" width="auto">
        <MediumHeadLine color="pink"> WHO?</MediumHeadLine>
        <SizedHeadLine dir="rtl" color="black" size={2.5}>
          צוותים של סטודנטים למדעי המחשב במכללה למנהל המעוניינים ליצור פרויקטים
          ולאתגר את עצמם.
        </SizedHeadLine>
        <MediumHeadLine color="pink">WHEN?</MediumHeadLine>
        <SizedHeadLine dir="rtl" color="black" size={2.5}>
          03-04.4.2022
        </SizedHeadLine>
        <MediumHeadLine color="pink">WHERE? </MediumHeadLine>
        <SizedHeadLine dir="rtl" color="black"size={2.5}>
          במכללה בהתאם להנחיות התו הסגול (גם ללא מחוסנים).
        </SizedHeadLine>
        <MediumHeadLine color="pink">WHAT?</MediumHeadLine>
        <SizedHeadLine dir="rtl" color="black" size={2.5}>
        ספוט מזמינה אותכן/ם להשתתף בהאקטון ולהתמודד עם חלק מהאתגרים הגדולים שניצבים היום בעבודה בסביבות ענן, אופטימיזציה של משאבים, סביבות ריצה גדולות וללמוד על הפתרונות המובילים של ספוט.
       </SizedHeadLine>
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

  @media screen and (max-width: 550px) {
    left: 0;
    padding: 0 1.5rem;
  }
`;

const SectionHeadLine = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  margin: 7rem 0 0 0;
  transform: rotate(270deg) translateX(-20px);

  @media screen and (max-width: 550px) {
    position: absolute;
    transform: none;
    bottom: 51rem;
    right: 30rem;
}
  }
`;

export default InfoSection;
