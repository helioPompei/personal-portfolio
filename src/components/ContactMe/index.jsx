// CSS
import styles from "./ContactMe.module.css";
// HOOKS
import { useState } from "react";
// EMAIL
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: msg,
      email: email,
    };

    emailjs
      .send(
        "service_64ifsq9",
        "template_8xoxp2r",
        templateParams,
        "PhXMiCDh49_DJY1lZ"
      )
      .then(
        (res) => {
          console.log("email enviado", res.status, res.text);
          setName("");
          setEmail("");
          setMsg("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit} className={styles.form_box}>
        <h1 className={styles.titulo}> &rsaquo; Me mande uma mensagem! </h1>
        <label>
          <ion-icon name="person-outline"></ion-icon>
          <span> Nome </span>

          <input
            required
            placeholder="Digite seu nome..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <ion-icon name="mail-outline"></ion-icon>
          <span> Email </span>
          <input
            required
            placeholder="Digite seu email..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <ion-icon name="document-text-outline"></ion-icon>
          <span> Mensagem </span>
          <textarea
            required
            placeholder="Digite uma mensagem..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </label>
        <button className={styles.submit_button} type="submit">
          {" "}
          Enviar{" "}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
