import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';


import Login from './login'
import Regis from './register'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
       
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`Tabpanel-${index}`}
        aria-labelledby={`Tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'span'} variant={'body2'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `Tab-${index}`,
      'aria-controls': `Tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      //width: 800,
    },
    paper: {
      //padding: theme.spacing(1),
      textAlign: 'center',
      width:'fit-screen',
      color: theme.palette.text.secondary, 
      backgroundColor:theme.palette.background.default,
      
    },

    
  }));
  
  export default function Welcome(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    
  
    return (
      
     
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="mY tabs "
          >
            <Tab label="Giris Yap" {...a11yProps(0)} />
            <Tab label=" Kayit ol" {...a11yProps(1)} />
            
          </Tabs>
         
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          
          <Paper className={classes.paper}  >
         
            <Login />
          </Paper>
            
           
            
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          
          <Paper className={classes.paper}>
          
          
          <Regis/>
          </Paper>
          </TabPanel>
          
        </SwipeableViews>
        
      </div>
      
    );
  }