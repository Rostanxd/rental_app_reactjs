import React, {Component} from 'react';
import PropertySlide from "../components/PropertySlide";
import {connect} from "react-redux";

class PropertyDetails extends Component {
  
  render() {
    const {propertiesState} = this.props;
    const {currentProperty} = propertiesState;
    return (
        <div>
          <PropertySlide currentProperty={currentProperty}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    propertiesState,
  } = state;
  return {
    propertiesState,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails)