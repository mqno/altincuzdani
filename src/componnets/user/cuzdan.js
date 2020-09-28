import React ,{useState} from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    b1: {
        width: '3px',
        margin:'3px'
    },
    paper: {
     
      color: theme.palette.text.secondary, 
      backgroundColor:theme.palette.background.paper,
      
    },
    bfb: {
        width: "8rem",
        margin:'3px',
        
    }
}))

function Createwallet(wallet){
     const mywallet={}
     wallet.forEach(element => {mywallet[element.name]=0  })
     return mywallet  
        }
  export default function Cuzdan (props){
    const theme = useTheme();
    const classes = useStyles(theme);
    const DATA=props.veri.veri.result
    const[state,setState]=useState(()=>Createwallet(DATA))
    function clickhandler(item,n){setState(
    {...state,        
        [item]:n}
    )}
    function Calculatewallet(){
        let totalB=0
        let totalS=0
        DATA.map((element)=>{
            if(state[element.name]>0){
                totalB+= (state[element.name]*element.buying)
                totalS+= (state[element.name]*element.selling)
            }
        })
        return 'Alis : '+totalB.toLocaleString("sv-SE", { maximumFractionDigits: 2, minimumFractionDigits: 2 })+' ₺ Satis : '+totalS.toLocaleString("sv-SE", { maximumFractionDigits: 2, minimumFractionDigits: 2 })+' ₺'     
        }
    

    
    return( 
       
  
        <Grid container direction='row'  justify='center' alignItems='center'>
                 <Paper className={classes.paper} > 
                <Grid item key='total'> 
                        <Button variant="contained" size="medium" color="primary"  style={{margin:'2px' ,width:'280px'}}>
                            { Calculatewallet()}
                        </Button>
                    </Grid>
                {DATA.map((element)=>{return(
                    <Grid item key={element.name}> 
                    <Button variant="contained" size="small" color="primary" className={classes.b1} onClick={() =>state[element.name]>0 ? clickhandler(element.name,(state[element.name]-1)):null} >
                    - {state[element.name]}
                  </Button>
                  <Button variant="contained" size="medium" color="primary"  className={classes.bfb}>
                  {element.name }
                  </Button>
                  <Button variant="contained" size="small" color="primary" className={classes.b1} onClick={() =>clickhandler(element.name,(state[element.name]+1))}>       
                    + {state[element.name]}
                  </Button>
                  </Grid>
                )})}
               
         
                </Paper>
        </Grid>

  )
  
  }