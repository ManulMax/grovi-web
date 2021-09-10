import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#F0F0F0',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
      },
    heading:{
        color: '#009900',
        textAlign:'center',
        fontSize: '2rem',
        fontFamily: 'Nunito',
        fontWeight:'600',
        margin:'30px',
    },
    middle:{
        backgroundColor:'#005A00',
        minHeight:'100px',
    },
    description:{
        color:'#fff',
        fontFamily:'Nunito',
        fontWeight:'600',
        margin:'2%',
        padding:'1%',
    },
    media: {
        height: 540,
        width:'45%',
      },
  }));
  
  export default function Middle() {
    const classes = useStyles();
  
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
        <div className={classes.heading}>
        Best Marketplace For Your Organic and Surplus Harvest
        </div>
      <div className={classes.root}>
        <Box component="span" m={1}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '../assets/sell.png'}
          title="Grovi Mobile App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Buy And Sell
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Find your organic lifestyle while
selling what you have in your home garden
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={6}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '../assets/ad.png'}
          title="Grovi Mobile App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Friendly UI
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Access and post advertisements easily.
Find what you want withinn 10 seconds.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
          </Grid>
        </Grid>
        </Box>
      </div>
      <div className={classes.heading}>
      The Platform Where Growers Meet Customers
        </div>
      </Container>
      {/* <Box component="span" m={1} style={{ height: '10vh', margin: 0, padding: 0 }}>
        <div className={classes.middle}>
            <Grid container spacing={3}>
            <Grid item xs={4}>
         
        </Grid>
        <Grid item xs={8}>
          <div className={classes.description}>
              <h1>GroVi Mobile App</h1>
              <p>Surplus produce happens because of lack of selling opportunities, loss in demand or result of overproduction. There can be a lot of surplus product available 
                  in Sri Lanka without any consumer. Without a buyer, farmers are forced to leave their produce to rot on the farm or on the excess marketplace. Food consumption forecasting is also difficult because supply and demand each other. So we are making a platform for continous demand to supply.</p>
          </div>
        </Grid>
            </Grid>
        </div>
      </Box> */}
    </React.Fragment>
    
    );
  }