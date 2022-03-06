import { FlexWrapper, Text } from '../utils/constants/styledComponentsGlobal.constant';

function Footer() {
  return (
    <FlexWrapper height='60vh' backgroundColor='blue' flexDirection='column'>
      <Text mediaFontSize='3rem' textAlign='center' fontSize='4.5rem' color='pink'>!מצפים לכן ולכם</Text>
      <Text mediaFontSize='3rem' textAlign='center'>לכל שאלה ובירור נוסף - ניתן לפנות במייל</Text>
      <Text mediaFontSize='2.3rem' textAlign='center'><a href="mailto:Colmanhackathon@gmail.com" style={{color: "white",textDecoration:"none"}}>Colmanhackathon@gmail.com</a></Text>
    </FlexWrapper>
  );
}

export default Footer;
