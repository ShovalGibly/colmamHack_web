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
      height='70vh'
      padding='3.5rem 0 2rem 0'
    >
      <BigHeadLine>WE START IN </BigHeadLine>
      <CountDownTimer />
      <Space />
      <Text dir='rtl' textAlign='center' color='black' fontSize='1.8rem'>
      הפקולטה למדעי המחשב במסלול האקדמי המכללה למנהל בשיתוף חברת Spot By Netapp שמחים להזמין אתכם.ן להשתתף בהאקתון מאתגר ומרתק בן 26 שעות במהלכו תיקחו חלק פעיל בצוותים למציאת פתרונות לחברה והכרת תחום הניהול אחסון ומאגרי נתונים.      </Text>
    </FlexWrapper>
  );
}

export default Header;
