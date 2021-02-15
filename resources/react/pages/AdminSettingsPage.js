import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class AdminSettingsPage extends Component {

    render() {
      return (
      <div>
          <h1>AdminSettingsPage</h1>
      </div>
      );
    }
  
  }
  
  export default AdminSettingsPage;
  
  if (document.getElementById("root")) {
    ReactDOM.render(<AppSetup />, document.getElementById("root"));
  }