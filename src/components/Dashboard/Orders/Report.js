import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Header from './../Header';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Page, Text, View, Document, StyleSheet, PDFViewer} from '@react-pdf/renderer';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import MostSellChart from '../Reports/MostSellCategory';
import OrderTable from './OrderTable';

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
  
const ref = React.createRef();

// function App() {
//   return (
//     <div className="App">
//       <Pdf targetRef={ref} filename="code-example.pdf">
//         {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
//       </Pdf>
//       <div ref={ref}>
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<OrderReport />, rootElement);

export default function OrderReport() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {/* <MostSellChart/>
        <OrderTable/> */}
      </div>
    </div>
  );
}





