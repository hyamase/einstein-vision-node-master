import React, { Component } from 'react';
import './predictions.css';
import { StaggeredMotion, spring } from 'react-motion';

class Predictions extends Component {
  static propTypes = {
    // The Predictive Vision Predictions
    contents: React.PropTypes.array.isRequired
  }

  render() {
    const contents = this.props.contents;
    if (contents == null || contents.length === 0) {
      return <div className="empty"/>;
    }

    return (<StaggeredMotion
      defaultStyles={contents.map( p => ({maxHeight: 0}))}
      styles={prevInterpolatedStyles =>
        prevInterpolatedStyles.map((_, i) =>
          i === 0
            ? {maxHeight: spring(100)}
            : {maxHeight: spring(prevInterpolatedStyles[i - 1].maxHeight)}
        )
      }>
      {interpolatingStyles =>
        <div className="predictions">
          {interpolatingStyles.map((style, i) => {
            const prediction = contents[i];
            if (prediction == null) {
              return null;
            }
            const probability = prediction.probability;
            const percent = Math.round(probability * 100);
            const labels = prediction.label.split(/,\s*/);
            var suggestion = "";
            var displayornone = "none";

            if (labels[0] == "Good") {
                displayornone = "block";
                if (probability < 0.41) {
                    suggestion = "加工速度を10%、アシストガス圧を10%上げてください";
                } else if (probability > 0.41 && probability < 0.61) {
                    suggestion = "アシストガス圧を10%上げてください";
                } else if (probability > 0.6 && probability < 0.81) {
                    suggestion = "加工速度を10%上げてください";
                }
            }

            let color = '#fff';
            if (probability < .5) color = '#777';
            return (<div
                  className='prediction'
                  key={`prediction-${i}`}
                  style={Object.assign(style, {
                    color: color,
                    backgroundColor: `rgba(0,119,187,${probability})`,
                    display: `${displayornone}`
                  })}>
                    {
                        labels[0] != "NoGood"
                        ?
                        <h2>判定結果 <span className="probability" title="Probability">{percent}%</span></h2>
                        :
                        null
                    }
                    {
                        suggestion != ""
                        ?
                        <p>{suggestion}</p>
                        :
                        null
                    }
            </div>);
          })}
        </div>
      }
    </StaggeredMotion>);
  }
}

export default Predictions;
