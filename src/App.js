import React from 'react';
import axios from 'axios';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      data: []
    };
  }
  getlocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=pk.2ae676db4714f30a0bb7b8a376b8a6cf&q=${this.state.location}&format=json`;
    const req = await axios.get(url);
    this.setState({

      data: req.data[0]

    })
  }

  updatelocation = (event) => {

    this.setState({ location: event.target.value });
    

  }

  render() {
    return (
      <div>
        <h1>city explorer</h1>
        <form onSubmit={this.getlocation}>
          <input type='text' placeholder='city name' onChange={this.updatelocation} />
          <input type='submit' value='Explorer' />
        </form>
<div>
<h1>{this.state.data.display_name} {this.state.data.lat} {this.state.data.lon} </h1>
</div>

        <p>{this.state.data.display_name}</p>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.2ae676db4714f30a0bb7b8a376b8a6cf&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=<10&size=1000x300`} alt='name' />
<footer>
  <p>
    
  </p>
</footer>
      </div>
    )
  }
}

export default App



