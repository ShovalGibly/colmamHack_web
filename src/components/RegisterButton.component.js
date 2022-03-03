import { useState } from 'react';
import styled from 'styled-components';
import {
  FlexWrapper,
  PopupWrapper,
  Popup,
  Form,
  TextInput,
  SelectBox,
  TextArea,
  Button,
  Space,
  ClosingButton,
  Error,
  Text,
} from '../utils/constants/styledComponentsGlobal.constant';
import closeButton from '../assets/x.png';
import { useForm } from 'react-hook-form';
import { fireStore } from '../../firebase.config';

// react hook form docs => https://react-hook-form.com/get-started

function RegisterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const onSubmit = (data) => {
    fireStore
      .collection('participants')
      .doc(data.email)
      .get()
      .then((currentEmail) => {
        if (currentEmail.exists) return alert('אימייל קיים במערכת');
        fireStore
          .collection('participants')
          .doc(data.email)
          .set(data)
          .then(() => {
            alert('תודה שנרשמת!');
            handleClose();
          })
          .catch(() => {
            alert('לא הצלחנו לרשום אותך למערכת, אנא נסה מאוחר יותר.');
          });
      });
  };

  return (
    <>
      <FloatingButton
        isOpen={isOpen}
        backgroundColor='pink'
        onClick={handleOpen}
      >
        הירשם עכשיו
      </FloatingButton>
      <PopupWrapper isOpen={isOpen}>
        <ClosingButton onClick={handleClose}>
          <img src={closeButton} width="50px" height="50px" />
        </ClosingButton>
        <Popup>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              ref={register({ required: true, minLength: 2, maxLength: 25 })}
              name='fullName'
              type='text'
              dir='rtl'
              placeholder='שם מלא'
            />
            {errors.fullName && (
              <Error dir='rtl'> שדה חובה בין 2 ל 25 תווים </Error>
            )}
            <TextInput
              ref={register({ required: true, pattern: emailRegex })}
              name='email'
              type='email'
              dir='rtl'
              placeholder='מייל'
            />
            {errors.email && <Error dir='rtl'> אנא הכנס אימייל תקין </Error>}
            <TextInput
              ref={register({ required: true, minLength: 8, maxLength: 12 })}
              name='mobileNumber'
              type='tel'
              dir='rtl'
              placeholder=' טלפון נייד '
            />
            {errors.mobileNumber && (
              <Error dir='rtl'> אנא הכנס מספר טלפון תקין </Error>
            )}
            <TextInput
              ref={register({ required: true, minLength: 9, maxLength: 9, pattern: /^[0-9]*$/ })}
              name='id'
              type='tel'
              dir='rtl'
              placeholder=' ת.ז '
            />
            {errors.id && (
              <Error dir='rtl'>
                {' '}
                אנא הכנס מספר זהות תקין בעל 9 ספרות
              </Error>
            )}
            <TextInput
              ref={register({ required: true, minLength: 2, maxLength: 25 })}
              name='groupName'
              type='text'
              dir='rtl'
              placeholder=' שם קבוצה (או אין קבוצה אם אין) '
            />
            {errors.groupName && (
              <Error dir='rtl'>
                {' '}
                אנא הכנס שם קבוצה או כתוב אין קבוצה אם אין{' '}
              </Error>
            )}
            <TextInput
              ref={register({ minLength: 2, maxLength: 200 })}
              name='members'
              type='text'
              dir='rtl'
              placeholder=' אנא ציינ/י שמות סטודנטים לקבוצה מופרדים בפסיק (לא חובה )  '
            />
            {errors.members && (
              <Error dir='rtl'>
                {' '}
                עד 200 תווים{' '}
              </Error>
            )}
            <SelectWrapper
              justifyContent='space-between'
              flexDirection='row-reverse'
            >
              <SelectBox
                ref={register({ validate: (value) => value !== '' })}
                name='studyYear'
                dir='rtl'
              >
                <option value=''> שנת לימוד </option>
                <option value='year2'> שנה ב </option>
                <option value='year3'> שנה ג </option>
                <option value='other'> אחר </option>
              </SelectBox>
              <SelectBox
                ref={register({ validate: (value) => value !== '' })}
                name='studyRoute'
                dir='rtl'
              >
                <option value=''> מסלול </option>
                <option value='morning'> בוקר </option>
                <option value='evening'> ערב </option>
                <option value='avaz'> אב"צ  </option>
                <option value='alaz'> אל"צ  </option>
              </SelectBox>
            </SelectWrapper>
            {errors.studyYear && <Error dir='rtl'> אנא בחר שנת לימוד </Error>}
            {errors.studyField && <Error dir='rtl'> אנא בחר סוג תואר </Error>}
            <SelectWrapper justifyContent='flex-end' width='95%'>              
              <label  dir='rtl' for="participatedInHack" style={{marginRight: '1rem', color: '#black'}}> השתתפתי בעבר בהקאתון </label>
              <input type='checkbox' name='participatedInHack' ref={register()}/>
            </SelectWrapper>
            <TextArea
              ref={register}
              name='aboutSelf'
              rows='6'
              dir='rtl'
              placeholder='ספר/י על עצמך בכמה מילים'
            />
            <Text mediaFontSize='1.6rem' dir='rtl' width='50rem' fontSize='1.3rem' style={{color:'black'}}>
              על כל סטודנט.ית לבצע הרשמה ! ההרשמה פתוחה לסטודנטים בשנים א', ב', וג' ומסלול אל"צ ד' ה' בהתאמה.
              <b> ** הרשמה אינה מבטיחה השתתפות בהאקתון. אישור השתתפות יישלח לאחר סגירת ההרשמה. </b>
            </Text>
            <Button> שלח </Button>
          </Form>
        </Popup>
      </PopupWrapper>
    </>
  );
}

const FloatingButton = styled(Button)`
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 20rem;
  height: 5rem;
  border-radius: 5px;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 550px) {
    width: 12rem;
    height: 4rem;
    bottom: 5px;
    right: 5px;
  }
`;

const SelectWrapper = styled(FlexWrapper)`
  @media screen and (max-width: 550px) {
    justify-content: center;
  }
`;

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export default RegisterButton;
