import styled from "styled-components";
import { Tilt } from "react-tilt";

export const Card = styled(Tilt)`
  width: 600px;
  height: 400px;
  border-radius: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 1.5rem;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: 0.1s;
`;

