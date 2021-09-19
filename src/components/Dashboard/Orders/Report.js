import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Header from './../Header';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',    
    // '&:hover': {
    //     background: "#cfd8dc",
    //     transition: "background 1s, color 1s",
    //  },
  },
  fixedHeight: {
    height: '55vh',
  },
}));

export default function OrderReport() {
  const classes = useStyles();
  console.log("blaa")
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>            
                <Button variant="contained" style={{backgroundColor:'#009900', color:'#fff'}}>Contained</Button>
            </Grid>       
          </Grid>
         </Container>
      </main>
    </div>
  );
}