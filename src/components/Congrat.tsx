import React from "react";
import "./style/Congrat.css";

const Congrat: React.FC = () => {
  return (
    <div className='card'>
      <div className='card-congrat'>
        <h1>Agradecimento Especial!</h1>
        <p>
          Agradecemos a todos que compartilharam seus valiosos feedbacks! Cada sugestão e
          comentário são peças-chave para melhorarmos continuamente.
          <br /> Na Lotérica Dalila, valorizamos sua contribuição e estamos comprometidos
          em proporcionar sempre o melhor atendimento. Muito obrigado por escolher a
          Lotérica Dalila. <br />
          Atenciosamente, Equipe Lotérica Dalila.
        </p>
      </div>
    </div>
  );
};

export default Congrat;
