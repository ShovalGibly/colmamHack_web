import styled, { keyframes } from 'styled-components';
import { Colors, Fonts } from './style.constant';

export const FlexWrapper = styled.div`
  margin: ${({ margin }) => margin ?? '0'};
  padding: ${({padding}) => padding?? '0' };
  position: relative;
  display: flex;
  width: ${({ width }) => width ?? '100%'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
  align-items: ${({ alignItems }) => alignItems ?? 'center'};
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  ${({ wrap }) => (wrap ? 'flex-wrap: wrap;' : '')}
  min-height: ${({ height }) => height ?? '100%'};
  background-color: ${({ backgroundColor }) =>
    Colors[backgroundColor] ?? backgroundColor ?? 'transparent'};
  

  @media screen and (max-width: 550px) {
    flex-direction: '${({ flexDirectionMobile, flexDirection }) =>
    flexDirectionMobile ?? flexDirection ?? 'row'}';
    width: ${({ width }) => width ?? '100%'};
    margin: ${({ marginMobile, margin }) => marginMobile ?? margin ?? '0'};
    padding: ${({paddingMobile}) => paddingMobile};
    `;

const Headline = styled.p`
  font-family: ${Fonts.main};
  text-transform: uppercase;
  margin: ${({ margin }) => margin ?? '0'};
  color: ${({ color }) => Colors[color] ?? color ?? Colors.lightPurple};
`;

export const ExtraHeadLine = styled(Headline)`
font-size: 15rem;
margin-left: 17rem;

  @media screen and (max-width: 550px) {
    font-size: 4rem;
    
  }
`;

export const BigHeadLine = styled(Headline)`
  font-size: 8rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    font-size: ${({ mediaFontSize }) => mediaFontSize ?? '4rem'};
  }
`;

export const MediumHeadLine = styled(Headline)`
  font-size: 3.5rem;
  @media screen and (max-width: 550px) {
    font-size: ${({ mediaFontSize }) => mediaFontSize ?? '2rem'};
  }
`;

export const SmallHeadLine = styled(Headline)`
  font-size: 2.5rem;

  @media screen and (max-width: 550px) {
    font-size: ${({ mediaFontSize }) => mediaFontSize ?? '2.2rem'};
    margin: 0 0 0 0.5rem;
  }
`;

export const SizedHeadLine = styled(Headline)`
  font-size: ${({ size }) => (size ? `${size}rem` : '2rem')};
  margin: 0 0 3rem 0;

  @media screen and (max-width: 550px) {
    font-size: ${({ size }) => (size ? `${size / 1.1}rem` : '1rem')};
    margin: 0 0 3rem 0.625rem;)};
  }
`;

export const Space = styled.div`
  margin: 3rem;

  @media screen and (max-width: 550px) {
    margin: 1.5rem;
  }
`;

export const Text = styled.p`
  margin: ${({ margin }) => margin ?? '0 0 0.5rem'};
  text-align: ${({ textAlign }) => textAlign ?? 'right'};
  font-size: ${({ fontSize }) => fontSize ?? '2.2rem'};
  color: ${({ color }) => Colors[color] ?? color ?? Colors.white};
  width: ${({ width }) => width ?? '70rem'};

  @media screen and (max-width: 550px) {
    font-size: ${({ mediaFontSize }) => mediaFontSize ?? '2rem'};
    margin: ${({ mediaMargin }) => mediaMargin ?? '0'};
    width: ${({ mobilewidth }) => mobilewidth ?? '30rem'};
  }
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  margin: 4rem;
  border: 8px solid ${Colors.white};
  border-radius: 50%;
  border-top: 8px solid ${Colors.darkPurple};
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
  height: ${({ height }) => height ?? '8rem'};
  margin-left: ${({ marginLeft }) => marginLeft ?? '0'};

  @media screen and (max-width: 550px) {
    height: ${({ heightMobile }) => heightMobile ?? '4rem'};
  }
`;

export const Link = styled.a`
  font-size: 1.5rem;
  color: black;
  text-decoration: none;

  &:hover {
    color: ${Colors.turquoise};
  }

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

const popupAnimation = keyframes`
  0% {
    transform: scale(0.2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const PopupWrapper = styled(FlexWrapper)`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2;
  background-color: ${Colors.darkPurple + Colors.opacity90};
  animation: ${popupAnimation} 0.5s linear;
`;

export const ClosingButton = styled.div`
  position: fixed;
  top: 5vh;
  right: 4vw;
  cursor: pointer;
  z-index: 3;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 550px) {
    top: 2rem;
    right: 2rem;
  }
`;

export const Popup = styled(FlexWrapper)`
  width: auto;
  height: auto;
  background-color: ${({ backgroundColor }) =>
    Colors[backgroundColor] ?? backgroundColor ?? 'transparent'};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.p`
  color: ${Colors.turquoise};
  margin: 0 1rem;
  align-self: flex-end;

  &::before {
    display: inline;
    content: '⚠ ';
  }
`;

export const TextInput = styled.input`
  padding: 1rem;
  color: black;
  font-size: 1.6rem;
  font-family: inherit;
  border-radius: 10px;
  background-color: ${Colors.white};
  width: 50rem;
  border: none;
  margin: 1rem;

  @media screen and (max-width: 550px) {
    padding: 5px;
    margin: 0.5rem 0;
    width: 80vw;
  }
`;

export const SelectBox = styled.select`
  padding: 1rem;
  color: black;
  font-size: 1.6rem;
  font-family: inherit;
  border-radius: 10px;
  background-color: ${Colors.white};
  width: 24rem;
  border: none;
  margin: 1rem;

  @media screen and (max-width: 550px) {
    padding: 5px;
    width: 37vw;
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  color: black;
  font-size: 1.6rem;
  font-family: inherit;
  border-radius: 10px;
  background-color: ${Colors.white};
  width: 50rem;
  border: none;
  margin: 1rem;
  resize: none;

  @media screen and (max-width: 550px) {
    padding: 5px;
    margin: 0.5rem 0;
    width: 80vw;
  }
`;

export const Button = styled.button`
  margin: 1rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-family: inherit;
  width: 20rem;
  height: 4rem;
  border-radius: 5px;
  background-color: ${Colors.turquoise};
  color: ${Colors.darkPurple};
  border: none;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }
`;
