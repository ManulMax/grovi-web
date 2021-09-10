import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginTop:'4%',
    marginBottom:'7%',
  },
  con:{
    alignItems:'center',
    textAlign:'center',
    marginTop:'5%',
    marginBottom:'7%',
  },
  heading:{
    color: '#205723',
    textAlign:'center',
    fontSize: '2rem',
    fontFamily: 'Nunito',
    fontWeight:'600',
    margin:'30px',
  },
  colorText: {
    color: '#009900',
  },
}));

export default function Team() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm" className={classes.con}>
    <div className={classes.heading}>
        <h2>Meet G<span className={classes.colorText}>rovi </span> Team</h2>
    </div>
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '../assets/anjana.jpg'} className={classes.large} />
      <Avatar alt="Travis Howard" src={process.env.PUBLIC_URL + '../assets/asindu.jpg'}  className={classes.large} />
      <Avatar alt="Cindy Baker" src={process.env.PUBLIC_URL + '../assets/ashan.jpg'}  className={classes.large} />
      <Avatar alt="Cindy Baker" src={process.env.PUBLIC_URL + '../assets/jony.jpg'}  className={classes.large} />
      <Avatar alt="Cindy Baker" src={process.env.PUBLIC_URL + '../assets/logo.jpg'}  className={classes.large} />
    </div>
    </Container>
  </React.Fragment>

  );
}
