import styled from "styled-components";
import BackEndImage from "../../assets/images/BackEndImage.jpg";
import DataBaseImage from "../../assets/images/DataBaseImage.jpg";
import FrontEndImage from "../../assets/images/FrontEndImage.jpg";
import { device } from "../../styles/BreakPoints";

export const TechContainer = styled.header`
  height: 0px;
`;

export const TechContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 1280px;
  height: 0px;
  padding-top: 60px;

  @media ${device.md} {
    flex-direction: column;
    padding-top: 340px;
  }
`;

export const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 300px;
  background-color: #fffafa;
  margin: 10px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
  border-radius: 30px 0px 30px 0px;
  padding: 1rem 0;

  @media ${device.md} {
    width: 80%;
  }

  &:hover.frontcard {
    background-image: url(${FrontEndImage});
    background-size: cover;
    background-position: center;
    color: white;
    svg {
      color: white;
    }
  }

  &:hover.backcard {
    background-image: url(${BackEndImage});
    background-size: cover;
    background-position: center;
    color: white;
    svg {
      color: white;
    }
  }

  &:hover.databasecard {
    background-image: url(${DataBaseImage});
    background-size: cover;
    background-position: center;
    color: white;
    svg {
      color: white;
    }
  }

  hr {
    width: 80%;
  }

  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.secundary};
  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.2rem;
  }
`;
