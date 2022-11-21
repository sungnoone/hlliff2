/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

import MWBScannerSDK from './cmbweb/bundle.js';


class Trigger extends React.Component {
  start() {
	{/* NOTE: mwbScanner is made global in webpack_inline - see webpack_inline/src/main.js */}
    mwbScanner.startScanning(10,20,80,40);
  }
  stop() {
    mwbScanner.closeScanner();
  }
  render() {
    return (
	<React.Fragment>
      <button onClick={this.start}>Start Scanner</button>
      <button onClick={this.stop}>Stop Scanner</button>
	</React.Fragment>
    );
  }
}

class Container extends React.Component {
  id = "cmbweb-preview-container"
  divStyle = {
	border: 'blue',
	position: 'fixed',
	top: '25%',
	left: '25%',
	width: '50%',
	height: '30%',
	backgroundColor: 'gray'
  }
  render() {
    return <div id={this.id} style={this.divStyle}/>;
  }
}

class SampleApp extends React.Component {

  render() {
	return (
	<React.Fragment>
      <Trigger/>		{/* buttons */}
	  <br/>				{/* and     */}
      <Container/>		{/* preview */}
	</React.Fragment>
    )
  }
}

export default SampleApp;