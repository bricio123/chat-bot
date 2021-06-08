import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Chatbot from "react-chatbot-kit";

import config from "../Chatbot/Chatbot_one/config"
import MessageParser from "../Chatbot/Chatbot_one/MessageParser";
import ActionProvider from "../Chatbot/Chatbot_one/ActionProvider";

function CheckList() {
  return (
    <div className="CheckList">
      <Container>

        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholder="digite aqui"
        />
      </Container>
    </div>
  );
}

const Container = styled.div`
        width:100%;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        
`
export default CheckList;