import { FlexWrapper, Text } from '../utils/constants/styledComponentsGlobal.constant';

function Footer() {
  return (
    <FlexWrapper height='40vh' backgroundColor='blue' flexDirection='column'>
      <Text textAlign='center' fontSize='4.5rem' color='pink'>!מצפים לכן ולכם</Text>
      <Text textAlign='center'>לכל שאלה ובירור נוסף - ניתן לפנות במייל</Text>
      <Text textAlign='center'>Colmanhackathon@gmail.com</Text>
    </FlexWrapper>
  );
}

export default Footer;
