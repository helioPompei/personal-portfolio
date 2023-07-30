import styled from "styled-components";
import { motion } from "framer-motion";

// Tech container out side
export const TechContainer = styled.header`
  background-color: #fafafa;
  width: 100%;
  min-height: 200px;
`;

// Tech Content intern
export const TechContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  height: 100%;
`;

export const TechTitle = styled.div`
  h1 {
    margin: 0.5em 0;
    font-size: 2em;
  }
`;

export const ContainerMotionTechs = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 1em 0 1em;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    label {
      font-weight: 500;
      font-size: 0.875em;
    }

    svg {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      margin: 0.1em;
      font-size: 4em;
    }
  }

  div div svg:hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform: translateY(-15px);
  }
`;
