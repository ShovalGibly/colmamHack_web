
import { useEffect, useRef, useState } from "react";
import uniqid from 'uniqid';
import styled from "styled-components";
import { BigHeadLine, FlexWrapper, SmallHeadLine, Loader } from "../utils/constants/styledComponentsGlobal.constant";

function CountDownTimer({date='may 30, 2021 12:00:00'}){
    const [countDownState, setCountDownState] = useState({days: 0, hours: 0, minutes: 0, secounds: 0});
    const [showCountDown, setShowCountDown] = useState(false);
    const timerInterval = useRef();
    
    function timer() {
        const targetTimeInSec = new Date(date).getTime();
        if(timerInterval.current) clearInterval(timerInterval.current);
        timerInterval.current = setInterval( () => {
            const currentTime = new Date().getTime();
            const distanceToTarget = targetTimeInSec - currentTime;
            if(distanceToTarget <= 0){
                setCountDownState({days: 0, hours: 0, minutes: 0, secounds: 0});
                return clearInterval(timerInterval.current);
            }
            if(!showCountDown) setShowCountDown(true);
            setCountDownState(formatTime(distanceToTarget));
        }, 1000)
    }
    
    useEffect(() => { timer(); return () => clearInterval(timerInterval);}, []);

    return (
        <FlexWrapper height='wrap-content'>
            {Object.keys(countDownState).map( key => {
                const numberToPrint = String(countDownState[key]).padStart(2, '0');
                const afterNumber = key !== 'secounds' ? ':' : ' ';
                return (
                    <NumberWrapper key={uniqid()}>
                        {isNaN(countDownState[key]) || !showCountDown ?
                            <Loader /> :
                            <BigHeadLine color='pink'>{`${numberToPrint} ${afterNumber}`}</BigHeadLine>
                        }
                        <SmallHeadLine margin='0 0 0 2rem'>{key}</SmallHeadLine>
                    </NumberWrapper>
                );
            })}
        </FlexWrapper>
    );
}

const NumberWrapper = styled.div`
    margin-left: 3rem;
    width: 25rem;
    
    @media screen and (max-width: 550px) {
        margin-left: 0.5rem;
        width: 8rem;
        position: relative;
        left: 1rem;
    }
`;

const DAYS = 1000 * 60 * 60 * 24;
const HOURS = 1000 * 60 * 60;
const MINUTES = 1000 * 60;
const formatTime = timeInSec => ({
    days: Math.floor(timeInSec / DAYS),
    hours: Math.floor(timeInSec % DAYS / HOURS),
    minutes: Math.floor(timeInSec % HOURS / MINUTES),
    secounds: Math.floor(timeInSec % MINUTES / 1000)
});

export default CountDownTimer;