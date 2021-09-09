import React from 'react'
import BackToTop from './TopBar'
import Box from '@material-ui/core/Box';
import Header from './Header';
import { makeStyles } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '50vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '../assets/cabbage.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));

export default function Home() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        {/* <BackToTop/> */}
        <Header />
        <CssBaseline />
      </div>
    );
  }
