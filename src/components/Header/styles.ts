import { Link } from "react-scroll";
import styled from "styled-components";
import { device } from "../../styles/BreakPoints";

interface NavContainerProps {
  isOpen: boolean;
}

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 80px;

  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #fff;
  padding: 0 2rem;
  height: 80px;
  max-width: 1280px;
`;

export const LogoContainer = styled.div`
  h1 span {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media ${device.sm} {
    font-size: 0.8rem;
  }
  @media ${device.xs} {
    font-size: 0.7rem;
  }
`;

export const NavContainer = styled.div<NavContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.secundary};
  width: 500px;
  height: 60px;
  color: white;
  border-radius: 10px;
  font-size: 1rem;

  a:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }

  .active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }

  @media ${device.md} {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    position: fixed;

    font-size: 1.1rem;
    border-radius: 0px;
    width: 50%;
    height: 100vh;
    top: 80px;
    right: ${(p) => (p.isOpen ? "0" : "-50%")};
    padding: 1rem;
    gap: 1.5rem;
    background-color: ${({ theme }) => theme.colors.secundary};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  @media ${device.xs} {
    width: 60%;
    right: ${(p) => (p.isOpen ? "0" : "-60%")};
  }
`;

export const StyledHamburgerContainer = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.colors.secundary};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};

  @media ${device.md} {
    display: flex;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  gap: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    p,
    svg {
      color: ${({ theme }) => theme.colors.secundary};
    }
    transform: translateY(-2px);
  }
`;
