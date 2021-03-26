
import styled from "styled-components";
import { ExtraHeadLine, FlexWrapper, MediumHeadLine, SplitLogo, Text } from "../utils/constants/styledComponentsGlobal.constant";
import split from "../assets/split.png";

function InfoSection() {
    return (
        <FlexWrapper backgroundColor='darkPurpel' height='100vh' id='info'>
            <InfoWrapper flexDirection='column' alignItems='flex-end' width='auto'>
                <MediumHeadLine color='turquoise'>who?</MediumHeadLine>
                <Text dir='rtl'>
                    בית הספר למדעי המחשב בשיתוף חברת ספליט איט מזמינים אותכם/ן סטודנטים 
                    לקחת חלק בהאקתון מאתגר בן עשרים ושש שעות בו תתעסקו יחד עם נציגי חברת ספליט איט
                    בשיפור חווית הקנייה בדיגיטל תוך הצעת פתרונות חדשניים לחברה והכרת תחום התשלומים ברשתות
                </Text>
                <MediumHeadLine color='turquoise'>when?</MediumHeadLine>
                <Text dir='rtl'>
                    בית הספר למדעי המחשב בשיתוף חברת ספליט איט מזמינים אותכם/ן סטודנטים 
                    לקחת חלק בהאקתון מאתגר בן עשרים ושש שעות בו תתעסקו יחד עם נציגי חברת ספליט איט
                    בשיפור חווית הקנייה בדיגיטל תוך הצעת פתרונות חדשניים לחברה והכרת תחום התשלומים ברשתות
                </Text>
                <MediumHeadLine color='turquoise'>where?</MediumHeadLine>
                <Text dir='rtl'>
                    בית הספר למדעי המחשב בשיתוף חברת ספליט איט מזמינים אותכם/ן סטודנטים 
                    לקחת חלק בהאקתון מאתגר בן עשרים ושש שעות בו תתעסקו יחד עם נציגי חברת ספליט איט
                    בשיפור חווית הקנייה בדיגיטל תוך הצעת פתרונות חדשניים לחברה והכרת תחום התשלומים ברשתות
                </Text>
                <MediumHeadLine color='turquoise'>what?</MediumHeadLine>
                <Text dir='rtl'>
                    בית הספר למדעי המחשב בשיתוף חברת ספליט איט מזמינים אותכם/ן סטודנטים 
                    לקחת חלק בהאקתון מאתגר בן עשרים ושש שעות בו תתעסקו יחד עם נציגי חברת ספליט איט
                    בשיפור חווית הקנייה בדיגיטל תוך הצעת פתרונות חדשניים לחברה והכרת תחום התשלומים ברשתות
                </Text>
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