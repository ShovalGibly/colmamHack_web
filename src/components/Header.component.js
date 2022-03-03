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
      height='80vh'
      padding='3.5rem 0 2rem 0'
    >
      <BigHeadLine>WE START IN </BigHeadLine>
      <CountDownTimer />
      <Space />
<<<<<<< HEAD
      <Text dir='rtl' textAlign='center' color='black'>

      הפקולטה למדעי המחשב במסלול האקדמי המכללה למנהל בשיתוף חברת Spot By Netapp שמחים להזמין אתכם.ן להשתתף בהאקתון מאתגר ומרתק בן 26 שעות במהלכו תיקחו חלק פעיל בצוותים למציאת פתרונות לחברה והכרת תחום ניהול משאבי ענן.      </Text>
=======
      <Text   dir='rtl' textAlign='center' color='black' fontSize='2rem'>
      הפקולטה למדעי המחשב במסלול האקדמי המכללה למנהל בשיתוף חברת Spot By Netapp שמחים להזמין אתכם.ן להשתתף בהאקתון מאתגר ומרתק בן 26 שעות במהלכו תיקחו חלק פעיל בצוותים למציאת פתרונות לחברה והכרת תחום הניהול אחסון ומאגרי נתונים.      </Text>
>>>>>>> 2979b8a2eedbde37b827ea56417a9f8c1ce0535e
    </FlexWrapper>
  );
}

export default Header;
