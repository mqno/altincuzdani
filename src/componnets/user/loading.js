import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary, 
    backgroundColor:theme.palette.background.default,
    
  },

}));

export default function Load() {
  const classes = useStyles();

  return (
    
      
            <Paper className={classes.paper} >
                <p style={{marginBottom:'7rem'}}></p>
                <span className='mylofo'  ><CircularProgress /> Yukleniyor...<p className='mylofo' style={{marginBottom:'10rem'}}></p></span>
            </Paper>
        
    
    
  );
}