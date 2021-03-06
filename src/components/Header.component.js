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
      <BigHeadLine mediaFontSize='6rem' >WE START IN </BigHeadLine>
      <CountDownTimer />
      <Space />
      <Text mediaFontSize='2rem' dir='rtl' textAlign='center' color='black' fontSize='2rem'>
      הפקולטה למדעי המחשב במסלול האקדמי המכללה למנהל בשיתוף חברת Spot by Netapp שמחים להזמין אתכם.ן להשתתף בהאקתון מאתגר ומרתק בן 26 שעות במהלכו תיקחו חלק פעיל בצוותים למציאת פתרונות לחברה והכרת תחום ניהול משאבי הענן.     </Text>
    </FlexWrapper>
  );
}

export default Header;
