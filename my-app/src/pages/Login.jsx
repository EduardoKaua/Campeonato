import React from "react";
import "./Login.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  document.querySelector("body").style.backgroundImage="linear-gradient(to right, rgb(33, 26, 44), rgb(71, 33, 33), rgb(35, 26, 44)"

  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <div className="container">
      <h1>Login</h1>

      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Login
          </button>
          <div className="seta">
            <Link to="/">
              <h1>↩</h1>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
