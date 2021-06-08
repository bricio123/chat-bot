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
            label="Ligar Todas as Tvs"
      />

      <FormControlLabel
        control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Verificar a live Dash"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkeH} onChange={handleChange}  name="checkedH" />}
        label="Verificar a live dos avisos"
      />
      
        
    </FormGroup>
    </All>
  );
}
const All = styled.div`
    display:flex;
    justify-content:center;

 `