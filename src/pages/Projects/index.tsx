import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Card } from "../../components/Card";
import * as S from "./styles";
import "./styles.css";

export const Projects = () => {
  return (
    <S.ProjectsContainer id="projects">
      <S.ProjectsContent>
        <h1>Area de Projetos</h1>

        <S.StyledSwiper navigation={true} modules={[Navigation]}>
          <S.StyledSwiperSlide>
            <Card />
          </S.StyledSwiperSlide>

          <S.StyledSwiperSlide>
            <Card />
          </S.StyledSwiperSlide>

          <S.StyledSwiperSlide>
            <Card />
          </S.StyledSwiperSlide>

          <S.StyledSwiperSlide>
            <Card />
          </S.StyledSwiperSlide>

          <S.StyledSwiperSlide>
            <Card />
          </S.StyledSwiperSlide>
        </S.StyledSwiper>
      </S.ProjectsContent>
    </S.ProjectsContainer>
  );
};
