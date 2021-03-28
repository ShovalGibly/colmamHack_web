import styled, { keyframes } from 'styled-components';
import { FlexWrapper, Link } from '../utils/constants/styledComponentsGlobal.constant';
import { Colors } from '../utils/constants/style.constant';
import logoPart1 from '../assets/logo-white.png';
import logoPart2 from '../assets/logo-part-2.png';

function TopBar() {
  return (
    <TopBarWrapper justifyContent='space-between'>
      <LogoWrapper>
        <LogoPartOne src={logoPart1} />
        <LogoPartTwo src={logoPart2} />
      </LogoWrapper>
      <Links height='auto' justifyContent='flex-end'>
        <Link href='#info'> מידע נוסף </Link>
      </Links>
    </TopBarWrapper>
  );
}

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const moveRightAnimation = keyframes`
  0% { left: 20%; }
  100% { left: 0; }
`;

const moveUpAnimation = keyframes`
  0% { top: 0; }
  100% { top: -50%; }
`;

const shrinkLogoAnimation = keyframes`
  0% { transform: scale(1); left: 0; }
  100% { transform: scale(.4); left: -25%; }
`;

const shrinkBackgroundAnimation = keyframes`
  0% { height: 100vh; }
  100% { height: 10vh; }
`;

const TopBarWrapper = styled(FlexWrapper)`
  position: sticky;
  top: 0;
  left: 0;

  background-color: ${Colors.darkPurple};
  padding: 5rem 10rem;
  z-index: 1;
  height: 100vh;

  animation-name: ${shrinkBackgroundAnimation};
  animation-duration: 0.5s;
  animation-delay: 1.8s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  position: relative;

  animation-name: ${moveUpAnimation}, ${shrinkLogoAnimation};
  animation-duration: 0.5s;
  animation-delay: 1.3s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const LogoPartOne = styled.img`
  position: relative;
  height: 5vw; //3rem
  opacity: 0;
  left: 20%;

  animation-name: ${fadeInAnimation}, ${moveRightAnimation};
  animation-duration: 0.5s;
  animation-delay: 0s, 0.5s;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media screen and (max-width: 550px) {
    height: 2rem; //1rem
  }
`;

const LogoPartTwo = styled.img`
  position: relative;
  height: 5vw; //3ewm
  opacity: 0;

  animation-name: ${moveRightAnimation}, ${fadeInAnimation};
  animation-duration: 0.5s;
  animation-delay: 0.8s;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media screen and (max-width: 550px) {
    height: 2rem; //1rem
  }
`;

const Links = styled(FlexWrapper)`
  opacity: 0;

  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;
  animation-delay: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export default TopBar;
