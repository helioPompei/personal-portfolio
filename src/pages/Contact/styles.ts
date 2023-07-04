import styled from "styled-components";

export const ContactContainer = styled.div``;

export const ContactContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 720px;
  background-color: ${(p) => p.theme.colors.white["white"]};
  padding: 3em;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 40%;
  height: 100%;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 400px;
  margin-top: 1em;
`;

export const LinkStyled = styled.a`
  color: black;
  display: flex;
  align-items: center;
  margin-top: 1em;
  border: 1px solid black;
  height: 2em;
  width: 300px;
  padding: 1em;
  text-decoration: none;
  font-size: 1.5em;

  &:hover {
    color: white;
    background-color: ${({ color }) => color};
  }

  svg {
    margin-right: 15px;
  }
`;

export const RightContainer = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  background-color: ${(p) => p.theme.colors.white["white"]};
  width: 500px;
  min-height: 650px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);

  button {
    margin: 1em;
    padding: 0.5em;
    font-size: 16px;
    width: 100%;
    background-color: #4caf50;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;

    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #2ee59d;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-2px);
    }
  }

  label {
    width: 100%;
    height: 2em;
    display: flex;
    align-items: center;
    font-size: 1.5em;
    margin-top: 1em;
    color: white;

    border: 3px solid ${(p) => p.theme.colors.yellow["yellow-100"]};
    overflow: hidden;
    border-radius: 5px 5px 5px 5px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20%;
      height: 100%;
      background-color: ${(p) => p.theme.colors.yellow["yellow-100"]};
    }

    input {
      font-size: 0.6em;
      width: 80%;
      height: 100%;
      padding: 0.875em;
      outline: none;
      border: none;
    }
  }
`;

export const TextAreaLabel = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 100%;

    span {
      width: 100%;
      height: 40px;

      p {
        font-weight: 600;
        font-size: large;
      }
    }

    textarea {
      border-radius: 0 0 0 0;
      border: none;
      width: 100%;
      height: 100px;
      outline: none;
      resize: none;
      font-size: 0.6em;
      padding: 0.875em;
    }
  }
`;
