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
      backgroundColor='white'
      height='60vh'
    >
      <BigHeadLine>WE START IN </BigHeadLine>
      <CountDownTimer />
      <Space />
      <Text dir='rtl' textAlign='center' color='black'>
      הפקולטה למדעי המחשב במסלול האקדמי המכללה למנהל בשיתוף חברת Spot By Netapp שמחים להזמין אתכם.ן להשתתף בהאקתון מאתגר ומרתק בן 26 שעות במהלכו תיקחו חלק פעיל בצוותים למציאת פתרונות לחברה והכרת תחום הניהול אחסון ומאגרי נתונים.      </Text>
    </FlexWrapper>
  );
}

export default Header;
