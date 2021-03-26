
import styled from "styled-components";
import { FlexWrapper, SmallHeadLine } from "../utils/constants/styledComponentsGlobal.constant";

function RegisterButton() {
    return (
        <FloatingButton backgroundColor='turquoise'>
           <SmallHeadLine color='darkPurpil'> הירשם עכשיו </SmallHeadLine>
        </FloatingButton>
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