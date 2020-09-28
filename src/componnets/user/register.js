import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      
    },
  },
  textfield:{
    width: '40vw',
    marginTop:'1.5rem'
    
   
  },
}));

export default function Regis() {
  const classes = useStyles();

  return (
     
    <Grid container direction='column' alignItems='center' >
        <h1 className='myhefo'>Kayit Ol</h1> 
        <form className={classes.root} noValidate autoComplete="off">
        <Grid item><TextField id="outlined-basic" label="Kullanici Adi" variant="outlined" className={classes.textfield}/></Grid>
        <Grid item><TextField id="outlined-basic" label="Email" variant="outlined" className={classes.textfield}/></Grid>
        <Grid item><TextField id="outlined-basic" label="Sifre" variant="outlined" className={classes.textfield}/></Grid>
        <Grid item><TextField id="outlined-basic" label="Sifre Tekrari" variant="outlined" className={classes.textfield}/></Grid>
        </form>
        
      <Button variant="contained" color="primary" style={{width:'12rem', marginTop:'3rem',marginBottom:'2rem'}} >Kayit Ol</Button>
  </Grid>
  
  );
}