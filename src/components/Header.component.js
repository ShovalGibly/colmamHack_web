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
        בית הספר למדעי המחשב במסלול האקדמי המכללה למנהל בשיתוף חברת SPLITIT
        שמחים להזמין אתכם.ן להשתתף בהאקתון מאתגר ומרתק בן 26 שעות במהלכו תיקחו
        חלק פעיל בצוותים למציאת פתרונות לחברה והכרת תחום התשלומים ברשתות ושיפור
        חווית הקנייה בדיגיטל.
      </Text>
    </FlexWrapper>
  );
}

export default Header;
