import { z } from "zod";

// Schema do formulario de registro do zod
export const messageFormSchema = z.object({
  name: z.string().nonempty("Por favor preencha seu nome!"),

  email: z
    .string()
    .nonempty("Por favor preencha seu e-mail!")
    .email("Formato de e-mail inválido"),

  message: z.string().nonempty("Digite uma mensagem!"),
});

// Tipo do schema do formulario de registro
export type messageFormData = z.infer<typeof messageFormSchema>;
