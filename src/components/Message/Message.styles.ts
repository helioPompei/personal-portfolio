import styled from "styled-components";
import { MessagePropsType } from ".";

export const MessageContainer = styled.div<Pick<MessagePropsType, "type">>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ type }) => (type === "error" ? "#e74c3c" : "green")};
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 30px;
  margin: 5px;
  padding: 15px;
`;
