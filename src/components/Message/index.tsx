import * as S from "./Message.styles";

export type MessagePropsType = {
  clearErrors: any;
  message: string;
  type: "error" | "correct";
};

export const Message = ({ clearErrors, message, type }: MessagePropsType) => {
  setTimeout(() => {
    clearErrors();
  }, 3000);
  console.log(message);
  return <S.MessageContainer type={type}>{message}</S.MessageContainer>;
};
