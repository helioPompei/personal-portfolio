import styled from "styled-components";
import ProjectBackgroundImage from "../../assets/backgrounds/ProjectBackgroundImage.jpg";
import { device } from "../../styles/BreakPoints";

import { Swiper, SwiperSlide } from "swiper/react";

export const ProjectsContainer = styled.div`
  background-image: url(${ProjectBackgroundImage});
  background-position: none;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.xxl} {
    background-position: center;
  }
`;

export const ProjectsContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  min-height: 1280px;
  padding-top: 300px;

  h1 {
    margin-bottom: 2rem;
  }

  @media ${device.md} {
    padding-top: 800px;
    padding-bottom: 100px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 720px;
  z-index: 0;


`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;


`;
