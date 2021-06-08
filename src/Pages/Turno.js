import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Arrow from '../componets/Arrow';


function Login(User) {
    return (
        <div className="Login">
            <All>
                <Container>

                    <Text >Bem vindo</Text>
                    <Pa>Escolha seu turno e e faça o checklist</Pa>
                    <GroupB >
                        <Link to='/CheckAM'> <Buttons>AM</Buttons></Link>
                        <Link to='/CheckPM'> <Buttons>PM</Buttons></Link>
                        <Arrow />

                    </GroupB>
                </Container>
            </All>
        </div>
    );
}

const All = styled.div`
    width:100%;
    height:100vh;
    background:#6A5ACD;
    display:flex;
    align-items:center;
    justify-content:center;
    @media screen{
        
    }
   
`

const Container = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:400px;
    height:70vh;
    border-radius:10px;

    :hover{
        transition:10s all ease;
    }

`
const Text = styled.h1`
    color:#fff;
    font-size:34px;
    padding:10px;
    font-weight:bold;
`
const Pa = styled.p`
    margin:10px;
    color:#fff;
    font-size:15px;
    font-weight:100;
    

`
const Buttons = styled.button`
    padding: 20px 50px;
    border-radius:10px;
    border:none;
    background-color:#008000;
    color:#fff;
    margin:10px;
    transition:2s ease;
    box-shadow:1px 1px 5px  #000;
    :hover{
        background-color:#32CD32;
    }


`
const GroupB = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    max-width:200px;

`


export default Login;


