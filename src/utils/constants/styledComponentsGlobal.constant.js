
import styled, {keyframes} from 'styled-components';
import { Colors, Fonts } from './style.constant';

export const FlexWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: ${({justifyContent}) => justifyContent ?? 'center'};
    align-items: ${({alignItems}) => alignItems ?? 'center'};
    flex-direction: ${({flexDirection}) => flexDirection ?? 'row'};
    width: ${({width}) => width ?? '100%'};
    height: ${({height}) => height ?? '100%'};
    background-color: ${({backgroundColor}) => Colors[backgroundColor] ?? backgroundColor ?? 'transparent'};
`;

const Headline = styled.p`
    font-family: ${Fonts.main};
    text-transform: uppercase;
    margin: ${({margin}) => margin ?? '0'};
    color: ${({color}) => Colors[color] ?? color ?? Colors.lightPurpel};
`;

export const ExtraHeadLine = styled(Headline)`
    font-size: 26rem;

    @media screen and (max-width: 550px) {
        font-size: 4rem;
    }
`;

export const BigHeadLine = styled(Headline)`
    font-size: 13.7rem;

    @media screen and (max-width: 550px) {
        font-size: 4rem;
    }
`;

export const MediumHeadLine = styled(Headline)`
    font-size: 8.5rem;

    @media screen and (max-width: 550px) {
        font-size: 4rem;
    }
`;

export const SmallHeadLine = styled(Headline)`
    font-size: 2rem;

    @media screen and (max-width: 550px) {
        font-size: 1rem;
        margin: 0 0 0 0.5rem;
    }
`;

export const Space = styled.div`
    margin: 3rem;

    @media screen and (max-width: 550px) {
        margin: 1.5rem;
    }
`;

export const Text = styled.p`
    margin: 0 0 1rem;
    text-align: ${({textAlign}) => textAlign ?? 'right'};
    font-size: ${({fontSize}) => fontSize ?? '1.6rem'};
    color: ${({color}) => Colors[color] ?? color ?? Colors.white};
    width: ${({width}) => width ?? '60rem'};

    @media screen and (max-width: 550px) {
        font-size: 1rem;
        width: 30rem;
    }
`

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
    margin: 4rem;
    border: 8px solid ${Colors.white};
    border-radius: 50%;
    border-top: 8px solid ${Colors.darkPurpel};
    width: 40px;
    height: 40px;
    animation: ${spin} 2s linear infinite;
    
    @media screen and (max-width: 550px) {
        margin: 1rem;
        width: 1rem;
        height: 1rem;
    }
`;

export const SplitLogo = styled.img`
    height: ${({height}) => height ?? '18rem'};
    margin-left: 5rem;

    @media screen and (max-width: 550px) {
        height: 4rem;
        margin-left: 0;
    }
`;

export const Link = styled.a`
    font-size: 1.6rem;
    color: ${Colors.white};
    text-decoration: none;

    &:hover {
        color: ${Colors.turquoise};
    }

    @media screen and (max-width: 550px) {
        font-size: 1rem;
    }
`;