import { useState } from "react";
import axios from "axios";

import "../pages/registermodule.css";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState(0);
  const [telefone, setTelefone] = useState(0);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function errorNotify(mensagem) {
    toast.error(mensagem, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function successNotify(mensagem) {
    toast.success(mensagem, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const form = {
    username: nome,
    password: senha,
    cpf: cpf,
    telefone: telefone,
    email: email,
  };

  function handleSubmit(e) {
    e.preventDefault();
    async function fetch() {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/register",
          form
        );
        successNotify("Sucesso ao registrar!");
        console.log("Usuário registrado com sucesso:", response.data);
        navigate("/auth/login");
      } catch (error) {
        console.error("Erro ao registrar:", error.response.data.message);
        errorNotify(error.response.data.message);
      }
    }
    fetch();
  }

  return (
    <>
      <div className="login-container">
        <img src="/cra.jpg" alt="" style={{ width: "200px" }} />
        <h2>Registrar</h2>
        <form
          method="post"
          action="/registro/criar"
          encType="multipart/form-data"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            placeholder="Nome"
            required
            name="nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="number"
            placeholder="CPF"
            required
            name="cpf"
            maxLength="11"
            onChange={(e) => setCPF(e.target.value)}
          />
          <input
            type="number"
            placeholder="Telefone"
            required
            name="telefone"
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            required
            name="senha"
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            required
            name="senha"
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
          <div className="signup">
            Já tem uma conta? <a href="/auth/login">Login</a>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
