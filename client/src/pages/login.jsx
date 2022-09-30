import React from "react";
import styled from "styled-components";
import LoginShape from "../components/login/LoginShape";
import Tapas1 from '../images/tapas1.jpg';
import Tapas2 from '../images/tapas2.jpg';
import { UseForm } from "../hooks/useFormLogin";
import { initialForm, validationsForm } from "../validations/login";

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;

  & > div {
    width: 50%;
    padding: 16px;
  }
`;

const LoginContain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const LoginForm = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
`;

const LoginFormContainer = styled.div`
  min-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LoginFormForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DivFormInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const LoginFormInput = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border: 1px solid #B1A7A6;
  border-radius: 4px;
`;

const LoginFormInputSubmit = styled.button`
  padding: 16px;
  font-size: 16px;
  border: 1px solid #B1A7A6;
  border-radius: 4px;
  background-color: #B56576;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #915F78;
  }
`;

const PLoginForm = styled.p`
  font-size: 16px;
  color: #B56576;
`;

const LoginInfo = styled.div`
  background-color: #B56576;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LoginInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 400px;

  & > h2 {
    font-size: 56px;
  }

  & > p {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Login = () => {

  const {
    form,
    errors,
    handleChange,
    handleSubmit,
  } = UseForm(initialForm, validationsForm);

  let data = [
    {
      name: "email",
      value: form.email,
      placeholder: "Ingresar correo",
      error: errors.email,
      tipo: "text",
    },
    {
      name: "password",
      value: form.password,
      placeholder: "Ingresar contraseña",
      error: errors.password,
      tipo: "password",
    },
  ];
  
  return (
    <LoginContainer>
      <div>
        <LoginContain>
          {/* LOGIN FORM */}
          <LoginForm>
            <LoginFormContainer>
              <h2>Iniciar sesión</h2>
              <LoginFormForm>
                {
                  data.map((v, i) => (
                    <DivFormInput key={i}>
                      <LoginFormInput 
                        name={v.name}
                        type={v.tipo}
                        value={v.value}
                        onChange={ handleChange }
                        placeholder={v.placeholder} 
                      />
                      {v.error && <PLoginForm>{v.error}</PLoginForm>}
                    </DivFormInput>
                  ))
                }
                <LoginFormInputSubmit onClick={ handleSubmit }>Iniciar sesión</LoginFormInputSubmit>
              </LoginFormForm>
            </LoginFormContainer>    
          </LoginForm>
        </LoginContain>
      </div>
      <LoginInfo>
        <LoginInfoText>
          <h2>Luchemos juntos por la vida</h2>
          <p>Ayuda a los pequeños a ser felices, una pequeña acción puede conseguir grandes cambios.</p>
        </LoginInfoText>
        <LoginShape colores='#E88C7D' alto='280px' ancho='200px' arriba='80px' izquierda='-40px' abajo='auto' derecha='auto' />
        <LoginShape colores='#EAAC8B' alto='120px' ancho='80px' arriba='104px' izquierda='200px' abajo='auto' derecha='auto' />
        <LoginShape colores='#E56B6F' alto='280px' ancho='200px' arriba='auto' izquierda='-40px' abajo='56px' derecha='auto' />
        <LoginShape colores='#E56B6F' alto='280px' ancho='200px' arriba='auto' izquierda='-64px' abajo='88px' derecha='auto' imagen={Tapas1} />
        <LoginShape colores='#E56B6F' alto='96px' ancho='80px' arriba='auto' izquierda='200px' abajo='80px' derecha='auto' />
        <LoginShape colores='#915F78' alto='280px' ancho='200px' arriba='auto' izquierda='auto' abajo='-40px' derecha='120px' />
        <LoginShape colores='#915F78' alto='120px' ancho='80px' arriba='auto' izquierda='auto' abajo='120px' derecha='20px' />
        <LoginShape colores='#915F78' alto='96px' ancho='64px' arriba='auto' izquierda='auto' abajo='240px' derecha='120px' />
        <LoginShape colores='#915F78' alto='96px' ancho='64px' arriba='-24px' izquierda='auto' abajo='auto' derecha='20px' />
        <LoginShape colores='#915F78' alto='280px' ancho='200px' arriba='120px' izquierda='auto' abajo='auto' derecha='40px' />
        <LoginShape colores='#915F78' alto='280px' ancho='200px' arriba='72px' izquierda='auto' abajo='auto' derecha='64px' imagen={Tapas2} />
      </LoginInfo> 
    </LoginContainer>
  )
}

export default Login;