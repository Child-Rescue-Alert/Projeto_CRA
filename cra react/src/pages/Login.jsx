import { useState } from "react";
import axios from "axios";

import "../pages/registermodule.css";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import "../pages/Login.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
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

  const form = {
    email: email,
    password: senha,
  };

  function handleSubmit(e) {
    e.preventDefault();
    async function fetch() {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/login",
          form
        );
        console.log("Usuário registrado com sucesso:", response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } catch (error) {
        console.error("Erro ao registrar:", error);
        errorNotify(error.response.data.message);
      }
    }
    fetch();
  }

  return (
    <>
      <div className="login-container">
        <img src="/cra.jpg" alt="" style={{ width: "200px" }} />
        <h2> Login </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
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
          <button type="submit">Entrar</button>
          <div className="signup">
            Nao tem uma conta? <a href="/auth/register">Registrar-se</a>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
