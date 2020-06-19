import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class TrackData extends Component {

    render() {
      const options = {
        theme: "light2", 
        title: {
          text: "Your Music Change Over 50 Songs"
        },
        axisY: {
          title: "Multiple",
          includeZero: false,
        },
        axisX: {
          title: "Song",
          interval: 1
        },
        data: [
          {				
          type: "line",
          name: "",
          dataPoints: []
        },
        {				
          type: "line",
          name: "",
          dataPoints: []
        },
        {				
          type: "line",
          name: "",
          dataPoints: []
        },
        {				
          type: "line",
          name: "",
          dataPoints: []
        },
        {				
          type: "line",
          name: "",
          dataPoints: []
        },
        ]
     }

      var label;
      var point;
      var property;
      const type = [
        "danceability",
        "energy",
        "liveness",
        "speechiness",
        "valence"
      ]
      
      for (var i = 0; i < this.props.tracks.length; i++) {
        label = this.props.tracks[i].track.name;
        for (var j = 0; j < type.length; j++) {
          property = type[j];
          point = this.props.features[i][property];
          options.data[j].name = property;
          options.data[j].dataPoints.push({label : label, y : point});
        }
      }

      console.log(options);
      
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
}

export default TrackData;
