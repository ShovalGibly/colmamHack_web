import styled, { keyframes } from 'styled-components';
import {
  FlexWrapper,
  Link,
} from '../utils/constants/styledComponentsGlobal.constant';
import { Colors } from '../utils/constants/style.constant';
import logoPart1 from '../assets/logo-white.png';
import logoPart2 from '../assets/logo-part-2.png';

function TopBar() {
  return (
    <TopBarWrapper justifyContent='space-between' height='10vh'>
      <LogoWrapper>
        <LogoPartOne src={logoPart1} />
        <LogoPartTwo src={logoPart2} />
      </LogoWrapper>
      <FlexWrapper height='auto' justifyContent='flex-end'>
        <Link href='#info'> מידע נוסף </Link>
      </FlexWrapper>
    </TopBarWrapper>
  );
}

const TopBarWrapper = styled(FlexWrapper)`
  position: fixed;
  top: 0;
  left: 0;

  background-color: ${Colors.darkPurple};
  padding: 5rem 10rem;
  z-index: 1;

  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
`;

const LogoPartOne = styled.img`
  height: 3rem;

  @media screen and (max-width: 550px) {
    height: 1rem;
  }
`;

const partTwoAnimation = keyframes`
    0% {opacity: 0; left: 20rem;}
    100% {opacity: 1; left: 0;}
`;

const LogoPartTwo = styled.img`
  position: relative;
  height: 3rem;
  animation: ${partTwoAnimation} 0.6s linear;

  @media screen and (max-width: 550px) {
    height: 1rem;
  }
`;

export default TopBar;
