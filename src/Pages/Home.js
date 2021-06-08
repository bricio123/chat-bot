import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Home() {
   
  return (
    <div className="Home">
        <Container>
            ola
        </Container>
    </div>
  );
}   

const Container = styled.div`
        width:100%;
        height:100vh;
        background-color:#fff;
        color:#000;
`
export default Home;