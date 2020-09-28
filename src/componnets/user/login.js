import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(5),
      
      
      
      
    },
    
  },
  textfield:{
    
    width: '40vw',
    
    

   
   
  },
 
  
}));

export default function Login() {
  const classes = useStyles();

  return (
    
      <Grid container direction='column' alignItems='center' >
         <h1 className='myhefo'>Giris Yap</h1>
        
      <form className={classes.root} noValidate autoComplete="off">
        <Grid item > <TextField id="outlined-basic" label="Kullanici Adi" variant="outlined" className={classes.textfield}/></Grid>
        <Grid item ><TextField id="outlined-basic" label="Sifre" variant="outlined" className={classes.textfield} /></Grid>
       <Button variant="contained" color="primary" style={{ width:'12rem', marginTop:'3rem',marginBottom:'2rem'}}>Giris yap</Button>
        
      </form>
      </Grid>
      
    
  );
}
