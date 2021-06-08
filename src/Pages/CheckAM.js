import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import TvIcon from '@material-ui/icons/Tv';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import CodeIcon from '@material-ui/icons/Code';
import StepConnector from '@material-ui/core/StepConnector';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';


import {Link } from 'react-router-dom';
import Arrow from '../componets/Arrow';
import Pc from '../componets/pc';
import Tv from '../componets/Tv';
import Ssh from '../componets/Ssh'

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(0,255,0) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(0,100,0) 0%, rgb(34,139,34) 50%, rgb(0,255,0) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,100,0)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(0,100,0) 0%, rgb(34,139,34) 50%, rgb(0,255,0) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <LaptopChromebookIcon />,
    2: <TvIcon />,
    3: <CodeIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
 
  active: PropTypes.bool,
  
  completed: PropTypes.bool,
  
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['PC', 'TV', 'SSH'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Pc/>;
    case 1:
      return <Tv/>;
    case 2:
      return <Ssh/>;
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <All className={classes.root}>
      <P>Olá, Tudo bem ?</P>
      <S>Faça seu checkList, antes de iniciar uma conversa</S>
 <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    
      <div>
        {activeStep === steps.length ? (
          <div className='Col'>
            <S className={classes.instructions}>
             Tudo pronto
            </S>
           <Link to='/Chat'> <Button onClick={handleReset} className={classes.button}>
             Ir para o chatbot
            </Button></Link>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Voltar
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Arrow/>
      </All>
  );
}

const All = styled.div`
text-align:center;
max-width:80%;
height:100vh;
display:flex;
flex-direction:column;
justify-items:center;
margin:0 auto;
justify-content:center;

`
const P = styled.h1`
    text-shadow:1px 1px 2px  #000;
    font-size:45px;
    margin-top:10px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-weight:900;
    

`
const S = styled.small`
  font-family:Verdana, Geneva, Tahoma, sans-serif;
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
