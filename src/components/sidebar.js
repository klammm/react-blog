import React, { Component } from 'react';
import "../styles/sidebar.css";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="Sidebar">
        <h3>All things Random</h3>
        <p>
          This is a safe space for all things random.
          I just speak my mind and it is what I deem as random. 
        </p>
      </div>
    );
  }
}

Sidebar.displayName = "Sidebar";
