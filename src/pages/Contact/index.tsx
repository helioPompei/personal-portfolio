import * as S from "./styles";
import {
  messageFormData,
  messageFormSchema,
} from "../../utils/ContactFormUtils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Message } from "../../components/Message";
import { MdPerson, MdEmail } from "react-icons/md";
import { BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<messageFormData>({ resolver: zodResolver(messageFormSchema) });

  // Handle Submit
  const handleSubmitEmailMessage = (data: messageFormData) => {
    toast.success("Enviado com sucesso!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    reset();
  };

  return (
    <S.ContactContainer id="contact">
      <S.ContactContent>
        <S.LeftContainer>
          <h1>Gostou do que viu? Me contrate!</h1>
          <h2>Entre em contato comigo!</h2>

          <S.SocialMediaContainer>
            <S.LinkStyled
              href="https://whatsa.me/5532984179939"
              target="_blank"
              color="#25D366"
            >
              <BsWhatsapp />
              <span>WhatsApp</span>
            </S.LinkStyled>

            <S.LinkStyled
              href="https://www.instagram.com/helio.pompei/"
              target="_blank"
              color="#E1306C"
            >
              <BsInstagram />
              <span>Instagram</span>
            </S.LinkStyled>

            <S.LinkStyled
              href="https://www.linkedin.com/in/heliopompei/"
              target="_blank"
              color="#0e76a8"
            >
              <BsLinkedin />
              <span>Linkdin</span>
            </S.LinkStyled>
          </S.SocialMediaContainer>
        </S.LeftContainer>

        <S.RightContainer>
          <S.StyledForm onSubmit={handleSubmit(handleSubmitEmailMessage)}>
            <h1> Me envie um E-mail! </h1>

            <label>
              <span>
                <MdPerson />
              </span>
              <input type="text" placeholder="Nome" {...register("name")} />
            </label>

            <label>
              <span>
                <MdEmail />
              </span>
              <input type="email" placeholder="E-mail" {...register("email")} />
            </label>

            <S.TextAreaLabel>
              <label>
                <span>
                  <p>Escreva uma mensagem!</p>
                </span>
                <textarea placeholder="Mensagem" {...register("message")} />
              </label>
            </S.TextAreaLabel>

            <button type="submit">Enviar!</button>

            <div>
              {errors.name?.message && (
                <Message
                  clearErrors={clearErrors}
                  message={errors.name.message}
                  type="error"
                />
              )}
              {errors.email?.message && (
                <Message
                  clearErrors={clearErrors}
                  message={errors.email.message}
                  type="error"
                />
              )}
              {errors.message?.message && (
                <Message
                  clearErrors={clearErrors}
                  message={errors.message.message}
                  type="error"
                />
              )}
            </div>
          </S.StyledForm>
        </S.RightContainer>
      </S.ContactContent>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </S.ContactContainer>
  );
};
