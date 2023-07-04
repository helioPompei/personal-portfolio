import styled from "styled-components";
import { Tilt } from "react-tilt";

export const Card = styled(Tilt)`
  max-width: 550px;
  min-height: 400px;
  border-radius: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 1.5rem;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.5);
  transition: 0.1s;

  div img {
    height: 200px;
    width: 100%;
    border: 1px solid black;
    object-fit: fill;
  }

  div a {
    svg {
      margin-right: 5px;
      font-size: 2.5em;
    }
  }
`;

export const TitleProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TechDiv = styled.div`
  h2 {
    font-size: 0.875em;
    margin-right: 0.5em;
  }
  gap: 0.1em;
  display: flex;
  align-items: center;
  font-size: 2em;
`;
