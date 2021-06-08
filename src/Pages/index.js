import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../img/basetech-branca.jpg';




function Login() {
  return (
    <div className="Login">
        <All>
          <Container>
            <Img src={Logo}/>
              <Input type='email' placeholder="Seu email" name='email' id='EmailInpunt' ></Input>
              <Input type='password' placeholder="Sua senha" name='password' id='PasswordInput'></Input>
           <Button onClick={LoginIN}>Entrar</Button>
          </Container>
        </All>
    </div>
  );
}

var usuarios = [
    {"login": "luz", "senha": "bcf"},
    {"login": "fabricio", "senha": "123"},
    {"login": "papai", "senha": "melancia"},
];

export  function LoginIN() {
    var usuario = document.getElementsByName('email')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value.toLowerCase();

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = 'Turno';
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}

const All = styled.div`
    width:100%;
    height:100vh;
    background:#6A5ACD;
    display:flex;
    align-items:center;
    justify-content:center;
   
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:400px;
    height:70vh;
    background:#fff;
    border-radius:10px;
    :hover{
      box-shadow:1px 3px 3px 2px #000;
    }

`
const Input = styled.input`
  width:65%;
  outline:none;
  padding:10px;
  margin:15px;
  border:1px solid #6A5ACD;
  border-radius:5px;

  ::placeholder{
      font-size:15px;
      
  }
`
const Button = styled.button`
  padding:15px;
  margin:10px;
  width:250px;
  background-color:transparent;
  border:1px solid #008000;
  border-radius:5px;
  font-weight:bold;
  font-size:15px;
  transition:1s ease;
  :hover{
    background:#008000;
    color:#fff;
  }
`
const Img = styled.img `
width:auto;
height:100px;
`


export default Login;
