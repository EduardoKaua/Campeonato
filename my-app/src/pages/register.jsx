import "./register.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link } from "react-router-dom";

function register(props) {
  console.log(props.location);
  console.log(props.match);
  console.log(props.history);

  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup.string().required("O nick é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <div className="container">
      <h1>Cadastro</h1>

      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Nick" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="form-nome">
            <input
              name="nome"
              className="form-field"
              placeholder="Primeiro Nome"
            />
            <div className="form-idade">
              <input
                type="number"
                name="idade"
                className="form-field"
                placeholder="idade"
                min="12"
              />
            </div>
            <div className="form-senha">
              <Field
                name="password"
                type="password"
                className="form-field"
                placeholder="Senha"
              />

              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </div>
          </div>
          <br />
          <div className="form-jogo">
            <select name="jogo" id="jogo">
              <option value="jogo">Counter-Strike - Csgo</option>
              <option value="jogo2">Valorant</option>
              <option value="jogo3">League of Legends - Lol</option>
              <option value="jogo4">FreeFire</option>
            </select>
          </div>
          <br />
          <div className="form-turma">
            <select name="Turma" id="Turma">
              <option value="Turma1">Turma 1 - Segunda quarta e sexta</option>
              <option value="Turma2">Turma 2 - Terça quinta e sexta</option>
            </select>
          </div>

          <button className="button" type="submit">
            cadastrar
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

export default register;
