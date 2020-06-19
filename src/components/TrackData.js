import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class TrackData extends Component {

    render() {
      const options = {
        theme: "light2", 
        title: {
          text: "How Your Music Taste has Changed"
        },
        axisY: {
          title: "Multiple",
          includeZero: false,
        },
        axisX: {
          title: "Song",
          interval: 1
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          horizontalAlign: "center",
          dockInsidePlotArea: true,
        },
        data: []
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

          if (!options.data[j])
            options.data.push({
              type : "line", 
              name : property,
              axisYType : "secondary", 
              showInLegend : true, 
              markerSize: 0, 
              dataPoints : []
            }); 
          options.data[j].dataPoints.push({label : label, x : i, y : point});
        }
      }
      
     return (
        <div className="track-display">
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
}

export default TrackData;
