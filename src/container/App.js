import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Blog from '../components/blog';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Blog}/>  
      </BrowserRouter>
    );
  }
}

export default App;
