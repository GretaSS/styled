import React, {Component} from 'react';
import {
  View,
  // Text,
  Table,
} from '../../styled';

class App extends Component{
    render(){
      return(
        <div>
            <View width='200px' bgColor="orange" maxHeight='2000px' flex>
              Hello 
            </View>
            <Table>
              <tr><td>1</td><td>2</td></tr>
            </Table>
        </div>
        
      )
    }
  }
  export default App;