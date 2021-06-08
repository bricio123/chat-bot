import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';




function Arrow() {
    return (
        <Link to='/Chat'>  
         <ContainerAll>
            <ArrowForwardIosIcon color="secondary" />
        </ContainerAll></Link>
    );
}

const ContainerAll = styled.div`
    position:absolute;
    bottom:0;
    right:0;
    padding:50px;
    transition:1s ease all;
    :hover{
        padding-right:60px ;
        
    }

`

export default Arrow;