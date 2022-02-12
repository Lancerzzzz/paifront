import React, { Component } from 'react';
import {Map, APILoader, Marker} from '@uiw/react-baidu-map'
import "./index.css"
export default class About extends Component {
  
  render() {
    const coordinate = {lng: 118.166442, lat: 24.523962}
    return (
      <div className="map_container" style={{ width: '50%', height: '500px' }}>
    <APILoader akay="C7YWLOO82o8vfloiYeC4CYdZBKZUjgxy">
      <Map 
      style={{margin:"0 auto;"}} 
      center={coordinate}
      zoom={17}
      enableScrollWheelZoom={true}>
        {({ BMap, map, container }) => {
          return;
        }}
        <Marker animation={2} position={coordinate} type="loc_red" />
      </Map>
    </APILoader>
  </div>
    );
  }
}
