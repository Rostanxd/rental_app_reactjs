import React, {Component} from 'react';
import PropertySlide from "../components/PropertySlide";

export default class PropertyDetails extends Component {
  componentDidMount() {
  }
  
  render() {
    const { handle } = this.props.match.params;
    const { address, imageArrUrl } = this.props.location.state;
    return (
        <div>
          <PropertySlide
              key={handle}
              title={address}
              imageArrUrl={imageArrUrl}/>
        </div>
    );
  }
}