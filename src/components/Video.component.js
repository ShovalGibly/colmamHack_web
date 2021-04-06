import { FlexWrapper } from '../utils/constants/styledComponentsGlobal.constant';
import styled from 'styled-components';
import { Colors } from '../utils/constants/style.constant';

function Video() {
  return (
    <FlexWrapper height='100vh'>
      <Overlay></Overlay>
      <VideoFrame
        src='https://www.youtube.com/embed/daAxOiSD78c'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></VideoFrame>
    </FlexWrapper>
  );
}

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.lightPurple};
  z-index: 1;
  opacity: 0.2;
`;

export default Video;
