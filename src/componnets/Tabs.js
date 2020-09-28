import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


import Tablem from './table'
import Welcome from './user/welcome'
import Load from './user/loading'
import Cuzdan from './user/cuzdan'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
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
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    //width: 500,  //i like big tabs i cant lie
  },
}));

export default function Mytabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const veri=props.veri;
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="myTabs "
        >
          <Tab label="Giris Yap" {...a11yProps(0)} />
          <Tab label="Altin Fiyatlari" {...a11yProps(1)} />
          <Tab label="Cuzdan" {...a11yProps(2)} />
        </Tabs>
       
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container direction='row' justify="center" spacing={2} >
              <Grid item  ></Grid>
              <Grid item xs={12} md={8} lg={6}  >
                <Welcome /> 
              </Grid>
              
        </Grid>
        
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container direction='row' justify="center" >
            <Grid item  ></Grid>
            <Grid item xs={12} md={10} lg={8}  >
              {
              props.veri.veri?
              <Tablem veri={veri}/>:<Load />
              }
          </Grid>
        
        </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid container direction='row' justify="center" >
            <Grid item  ></Grid>
            <Grid item xs={12} sm={10} md={8}  >
            {props.veri.veri?
            <Cuzdan veri={veri} />:<Load />}
            </Grid>     
        </Grid>
        </TabPanel>
 
      </SwipeableViews>
    </div>
  );
}