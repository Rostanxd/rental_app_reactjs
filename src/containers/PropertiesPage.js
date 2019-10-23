import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropertieList from '../components/PropertieList'
import {PROPERTIES_READ} from "../actions/actionTypes";

class PropertiesPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.readProperties();
    }

    render() {
        const {propertiesState} = this.props;
        const {properties, fetchingList, errorList} = propertiesState;
        return (
            <div>
                <h2>Propertie Page</h2>
                {
                    fetchingList ?
                        <h3>Loading...</h3> :
                        properties.length ?
                            <PropertieList properties={properties}/> :
                            <p>No data</p>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        propertiesState,
        readProperties,
    } = state;
    return {
        propertiesState,
        readProperties,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        readProperties: () => dispatch({type: PROPERTIES_READ}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesPage)