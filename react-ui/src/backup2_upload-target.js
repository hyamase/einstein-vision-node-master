import React, { Component } from 'react';
import './upload-target.css';

class UploadTarget extends Component {

  render() {
    return (
    <div className="upload-target">
    <svg className="camera" viewBox="0 0 288 248">
    <g>
      <g>
        <path className="st0" d="M144.5,234.5c-30.7,0-61.3,0-92,0c-15.6,0-26.8-7-33.4-21.2c-1.8-3.9-2.6-8-2.6-12.3c0-40.2,0-80.5,0-120.7
          c0-18,15.5-33.4,33.4-33.5c9.3,0,18.7-0.1,28,0.1c2.1,0,2.8-0.7,3.6-2.5c3.2-7.6,4.5-16.1,10.2-22.6c5.3-5.9,11.9-9.2,20-9.2
          c20.8,0,41.7,0,62.5,0c15.5,0,24.4,6.3,29.4,21.1c1.3,3.8,2.8,7.5,4.1,11.2c0.6,1.6,1.6,2,3.2,2c10.9,0.2,21.8-0.6,32.7,0.4
          c12.9,1.3,25.7,13.3,28.1,26.1c0.7,3.5,0.8,6.9,0.8,10.4c0,38.7,0,77.5,0,116.2c0,19.2-15.3,34.5-34.5,34.5
          C206.8,234.5,175.7,234.5,144.5,234.5z M144.6,200.4c32.9,0,59.8-26.7,59.8-59.4c0-33.4-26.8-60.4-60-60.3
          c-32.9,0.1-59.8,27-59.8,59.8C84.6,173.8,111.2,200.4,144.6,200.4z"/>
        <path className="st0" d="M144.5,102.4c21.2,0,38.7,17.5,38.4,38.2c-0.3,21.5-17.3,38.4-38.4,38.4c-21.1,0-38.6-17.4-38.4-38.4
          C106.2,119.2,123.1,102.4,144.5,102.4z"/>
      </g>
    </g>
    </svg>
    </div>);
  }

}

export default UploadTarget;
