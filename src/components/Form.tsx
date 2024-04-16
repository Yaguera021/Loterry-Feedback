import axios from "axios";
import React, { useState } from "react";
import Smartphone from "../images/smartphone.svg";
import User from "../images/user.svg";
import Stars from "./Stars";
import "./style/Form.css";

interface FormProps extends React.HTMLProps<HTMLDivElement> {
  showCongratComponent: () => void;
}

interface ClienteAspect {
  atendimento: number;
  agilidade: number;
  ambiente: number;
}

interface Cliente {
  nome: string;
  telefone: string;
  atendimento: number;
  agilidade: number;
  ambiente: number;
  comentario: string;
}

const Form: React.FC<FormProps> = ({ showCongratComponent }) => {
  const [cliente, setCliente] = useState<Cliente>({
    nome: "",
    telefone: "",
    atendimento: 0,
    agilidade: 0,
    ambiente: 0,
    comentario: "",
  });

  const maxLength = 300;
  const [flipped, setFlipped] = useState(false);

  const handleInputChange = (name: string, value: string | number) => {
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name === "telefone") {
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
      handleInputChange(name, formattedValue);
    } else {
      handleInputChange(name, value);
    }
  };

  const flipCard = () => {
    setFlipped(!flipped);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasResponded = localStorage.getItem("hasResponded");
    if (hasResponded) {
      alert("Você já respondeu ao formulário.");
      return;
    }

    const { atendimento, agilidade, ambiente } = cliente;

    if (!atendimento || !agilidade || !ambiente) {
      alert("Por favor, deixe sua avaliação antes de enviar.");
      return;
    }

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(
        "http://localhost:3006/api/clientes",
        JSON.stringify(cliente),
        { headers }
      );
      setCliente({ ...cliente, comentario: "" });
      console.log("Cliente enviado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
    localStorage.setItem("hasResponded", "true");
    showCongratComponent();
  };

  const isDisabled =
    cliente.agilidade !== 0 && cliente.atendimento !== 0 && cliente.ambiente !== 0;
  return (
    <div className={`card ${flipped ? "flipped" : ""}`}>
      <div className='card-inner'>
        <div className='card-front'>
          <form className='forms' onSubmit={handleSubmit}>
            <h4 className='title'>Deixe sua avaliação!</h4>
            <div className='input-group'>
              <div className='field'>
                <img src={User} alt='user icon' className='icons' />
                <input
                  id='nome'
                  placeholder='Digite seu nome'
                  className='input-field'
                  name='nome'
                  type='text'
                  value={cliente.nome}
                  onChange={handleChange}
                />
              </div>
              <div className='field'>
                <img src={Smartphone} alt='cellphone icon' className='icons' />
                <input
                  id='telefone'
                  placeholder='(xx)xxxxx-xxxx'
                  className='input-field'
                  name='telefone'
                  type='text'
                  value={cliente.telefone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {["atendimento", "agilidade", "ambiente"].map((aspect) => (
              <label key={aspect} htmlFor={aspect} className='star-evaluation'>
                {aspect.charAt(0).toUpperCase() + aspect.slice(1)}
                <Stars
                  name={aspect}
                  value={cliente[aspect as keyof ClienteAspect]}
                  onChange={(value: number) => handleInputChange(aspect, value)}
                />
              </label>
            ))}

            <div className='btn-container'>
              <button
                disabled={!isDisabled}
                className='btn btn-enviar'
                type='button'
                onClick={flipCard}
              >
                Comente algo
              </button>
              <button disabled={!isDisabled} className='btn btn-enviar' type='submit'>
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className='card-back'>
          <form className='forms' onSubmit={handleSubmit}>
            <h4 className='title'>Deixe sua avaliação!</h4>
            <div className='input-text'>
              <textarea
                className='text-area'
                placeholder='Max 300 caracteres...'
                name='comentario'
                value={cliente.comentario}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='caracteres'>
              <p>{maxLength - cliente.comentario.length} caracteres restantes</p>
              <button className='btn' type='submit'>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
