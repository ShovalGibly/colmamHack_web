
import { useState } from "react";
import styled from "styled-components";
import { FlexWrapper, SmallHeadLine, PopupWrapper, Popup, Form, TextInput, SelectBox, TextArea, Button, Space, ClosingButton } from "../utils/constants/styledComponentsGlobal.constant";
import closeButton from '../assets/close-button.png';

function RegisterButton() {
    const [isOpen, setIsOpen] = useState(true);
    
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <FloatingButton isOpen={isOpen} backgroundColor='turquoise' onClick={handleOpen}>
                הירשם עכשיו
            </FloatingButton>
            <PopupWrapper isOpen={isOpen}>
                <ClosingButton onClick={handleClose}>
                    <img src={closeButton} />
                </ClosingButton>
                <Popup>
                    <Form>
                        <TextInput type='text' dir='rtl' placeholder='שם מלא'/>
                        <TextInput type='email' dir='rtl' placeholder='מייל'/>
                        <TextInput type='tel' dir='rtl' placeholder='טלפון'/>
                        <TextInput type='password' dir='rtl' placeholder='סיסמא'/>
                        <TextInput type='password' dir='rtl' placeholder='אימות סיסמא'/>
                        <SelectWrapper justifyContent='space-between' flexDirection='row-reverse'>
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
                        </SelectWrapper>
                        <TextArea rows='6' dir='rtl' placeholder='קצת על עצמך (אם בא לך)'/>
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

export default RegisterButton;