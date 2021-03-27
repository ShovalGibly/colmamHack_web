import {
  BigHeadLine,
  FlexWrapper,
  Space,
  Text,
} from '../utils/constants/styledComponentsGlobal.constant';
import CountDownTimer from './CountDownTimer.component';

function Header() {
  return (
    <FlexWrapper
      flexDirection='column'
      backgroundColor='darkPurple'
      height='100vh'
    >
      <BigHeadLine>WE START IN</BigHeadLine>
      <CountDownTimer date='apr 26, 2021 12:00:00' />
      <Space />
      <Text dir='rtl' textAlign='center'>
        בית הספר למדעי המחשב בשיתוף חברת ספליט איט מזמינים אותכם/ן סטודנטים לקחת
        חלק בהאקתון מאתגר בן עשרים ושש שעות בו תתעסקו יחד עם נציגי חברת ספליט
        איט בשיפור חווית הקנייה בדיגיטל תוך הצעת פתרונות חדשניים לחברה והכרת
        תחום התשלומים ברשתות
      </Text>
    </FlexWrapper>
  );
}

export default Header;
