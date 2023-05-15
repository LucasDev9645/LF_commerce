import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../../../components/FormInput";
import * as authService from "../../../services/auth-service";
import * as forms from "../../../utils/forms";
import { ContextToken } from "../../../utils/context-token";

import "./style.css";

const Login = () => {
  const { setContextTokenPayload } = useContext(ContextToken);

  const navigate = useNavigate();

  const [formData, setFormData] = useState<any>({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Email",
      validation: function (value: string) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          value.toLowerCase()
        );
      },
      message: "Favor informar um e-mail válido",
    },
    password: {
      value: "",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Senha",
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    authService
      .loginRequest(forms.toValues(formData))
      .then((response) => {
        authService.saveAccessToken(response.data.access_token);
        setContextTokenPayload(authService.getAccessTokenPayload());
        navigate("/cart");
      })
      .catch((error) => console.log("Erro", error));
  };

  const handleInputChange = (e: any) =>
    setFormData(
      forms.updateAndValidate(formData, e.target.name, e.target.value)
    );

  const handleTurnDirty = (name: string) =>
    setFormData(forms.dirtyAndValidate(formData, name));

  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.username}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">
                  {formData.username.message}
                </div>
              </div>
              <div>
                <FormInput
                  {...formData.password}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="dsc-login-form-buttons dsc-mt20">
              <button type="submit" className="dsc-btn dsc-btn-blue-form">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
