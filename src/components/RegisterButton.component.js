
import { useState } from "react";
import styled from "styled-components";
import { FlexWrapper, SmallHeadLine, PopupWrapper, Popup, Form, TextInput, SelectBox, TextArea, Button, Space } from "../utils/constants/styledComponentsGlobal.constant";

function RegisterButton() {
    const [isOpen, setIsOpen] = useState(true);
    
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <FloatingButton backgroundColor='turquoise'>
                <SmallHeadLine onClick={handleOpen} color='darkPurpil'> הירשם עכשיו </SmallHeadLine>
            </FloatingButton>
            <PopupWrapper isOpen={isOpen}>
                <Popup>
                    <Form>
                        <TextInput type='text' dir='rtl' placeholder='שם מלא'/>
                        <TextInput type='email' dir='rtl' placeholder='מייל'/>
                        <TextInput type='tel' dir='rtl' placeholder='טלפון'/>
                        <TextInput type='password' dir='rtl' placeholder='סיסמא'/>
                        <TextInput type='password' dir='rtl' placeholder='אימות סיסמא'/>
                        <FlexWrapper justifyContent='space-between' flexDirection='row-reverse'>
                            <SelectBox dir='rtl'>
                                <option> שנת לימוד </option>
                                <option> שנה א </option>
                                <option> שנה ב </option>
                                <option> שנה ג </option>
                            </SelectBox>
                            <SelectBox dir='rtl'>
                                <option> סוג התואר </option>
                                <option> מדעי המחשב </option>
                                <option> עיצוב </option>
                                <option> אחר </option>
                            </SelectBox>
                        </FlexWrapper>
                        <TextArea rows='6' dir='rtl' placeholder='קצת על עצמך (אם בא לך)'/>
                        <Button> שלח </Button>
                    </Form>
                </Popup>
            </PopupWrapper>
        </>
    );
}

const FloatingButton = styled(FlexWrapper)`
    cursor: pointer;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    width: 20rem;
    height: 5rem;
    border-radius: 5px;

    &:hover {
        transform: scale(1.1);
    }
`;

export default RegisterButton;