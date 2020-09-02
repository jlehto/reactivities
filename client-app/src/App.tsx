import React , {Component} from 'react';

import './App.css';
import axios from 'axios';
import { Icon, Header, HeaderContent, List } from 'semantic-ui-react';

//const data = [{id:1,name:'alpha'},{id:2,name:'beta'}]

class App extends Component {
  
  state = {
    values : []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
    .then((response) => {
      //console.log(response);
      this.setState({
        values : response.data
      });
    })
    
  }

  render() {
    return (
      <div>
        <Header as='h3'>
          <Icon name='users' size='big' color='violet'/>
          <HeaderContent>Reactivities</HeaderContent>
        </Header>  
        <List>
          {this.state.values.map((value: any) => 
          (<List.Item key={value.id}>{value.name}</List.Item>))}
        </List>
      </div>
    );
  }
  
}

export default App;
