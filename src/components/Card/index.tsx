import * as S from "./styles";
import image from "../../assets/Foto.jpg";

const customOptions = {
  reverse: true, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: 1, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export const Card = () => {
  return (
    <S.Card options={customOptions}>
      <h1> Titulo </h1>
      <div>
            <img style={{height: 200, width:400, objectFit: "none"}}src={image} alt="Foto de Helio Pompei" />
          </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        repellendus nisi eveniet, reprehenderit aperiam natus, ab incidunt
        perferendis quo, illo laborum ut nostrum iure dolorum cupiditate.
        Laudantium consectetur enim assumenda?
      </p>
      <div> TECHS USADAS </div>
      <div></div>
      <a href="#">LINK</a>
    </S.Card>
  );
};
