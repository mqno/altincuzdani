import React from 'react'

import Mytabs from './Tabs'

export default class Nav extends React.Component{
    constructor(props)
    { super (props);
      this.state = {veri:null}}
    componentDidMount() {
      //headers with api token
      const headers ={'Content-Type': 'Application/JSON','authorization': 'apikey 0xHORa9ZEiwgdJrZhfweRf:59ZY6REyCeAThORYEcl2C1'}
      // GET request using fetch with error handling
      fetch('https://api.collectapi.com/economy/goldPrice',{headers})
          .then(async response => {
              const data = await response.json();
              console.log('data fetched ')
  
              // check for error response
              if (!response.ok) {
                  // get error message from body or default to response statusText
                  const error = (data && data.message) || response.statusText;
                  return Promise.reject(error);
              }
  
              this.setState({ veri: data })
          })
          .catch(error => {
              this.setState({ errorMessage: error.toString() });
              console.error('There was an error!', error);
          });
   
}

render(){return(

    
        <Mytabs veri={this.state}/>
  
        

        )}


}