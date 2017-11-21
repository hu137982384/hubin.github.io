import React, { Component } from 'react';
import Header from './page/header.js';
import Content from './page/content.js';
import Footer from './page/footer.js';
export default class App extends Component{
  render() {
    return (
      <div>
      		<Header/>
      		<Content/>
      		<Footer/>          
      </div>
    );
  }
}

