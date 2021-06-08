import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'


export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <All>
    <FormGroup >
     
   
      <FormControlLabel

            control={<Checkbox checked={state.checkeF} onChange={handleChange} name="checkedF" />}
            label="Atualizar o Google Chrome "
      />

      <FormControlLabel
        control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Atualizar as maquinas"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkeH} onChange={handleChange}  name="checkedH" />}
        label="Limpar o chache do navegador"
      />
        
    </FormGroup>
    </All>
  );
}
const All = styled.div`
    display:flex;
    justify-content:center;

 `