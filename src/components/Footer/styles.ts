import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${(p) => p.theme.colors.primary};
`;

export const FooterContent = styled.div`
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  height: 100px;
`;
