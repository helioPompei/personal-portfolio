import * as S from "./Message.styles";

export type MessagePropsType = {
  clearErrors: any;
  message: string;
};

export const Message = ({ clearErrors, message }: MessagePropsType) => {
  setTimeout(() => {
    clearErrors();
  }, 3000);
  console.log(message);
  return <S.MessageContainer>{message}</S.MessageContainer>;
};
