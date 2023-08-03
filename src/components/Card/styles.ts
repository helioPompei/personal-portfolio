import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 
  width: 90%;
  height: 100%;

  p {
    font-size: 1.1rem;
  }
`;

export const TitleProject = styled.div`
  font-size: 1.2rem;
`;

export const ImageContainer = styled.img`
 
  height: 70%;
  width: 100%;
  object-fit: contain;
`;
