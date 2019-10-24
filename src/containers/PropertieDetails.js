import React, {Component} from 'react';
import PropertieSlide from "../components/PropertieSlide";
import {connect} from "react-redux";

class PropertieDetails extends Component {
  
  render() {
    const {propertiesState} = this.props;
    const {currentPropertie} = propertiesState;
    console.log(propertiesState);
    return (
        <div>
          <PropertieSlide currentPropertie={currentPropertie}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PropertieDetails)