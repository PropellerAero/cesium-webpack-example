// import { Cartesian3, createOsmBuildings, createWorldTerrain, Ion, Math, Viewer } from "cesium";

// import { Cartesian3 } from 'cesium'
import Cartesian3 from 'cesium/Core/Cartesian3';

console.log(new Cartesian3(0,1,2))

/*
import Cartesian3 from 'cesium/Core/Cartesian3';
import createWorldTerrain from 'cesium/Core/createWorldTerrain';
import Ion from 'cesium/Core/Ion';
import Math from 'cesium/Core/Math';
import createOsmBuildings from 'cesium/Scene/createOsmBuildings';
import Viewer from 'cesium/Widgets/Viewer/Viewer';


import "cesium/Widgets/widgets.css";
import "../src/css/main.css";

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
  terrainProvider: createWorldTerrain()
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
viewer.scene.primitives.add(createOsmBuildings());   

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination : Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation : {
    heading : Math.toRadians(0.0),
    pitch : Math.toRadians(-15.0),
  }
});

*/