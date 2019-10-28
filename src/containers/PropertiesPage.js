import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropertyList from '../components/PropertyList'
import {PROPERTIES_READ, SET_PROPERTIES_VIEW_MODE, SELECT_PROPERTY, SET_CURRENT_PAGE} from "../actions/actionTypes";
import Pagination from "../components/Pagination";

import './PropertiesPage.css';

class PropertiesPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.readProperties();
    }

    render() {
        const {propertiesState} = this.props;
        const {properties, fetchingList, currentPage, propertiesPerPage, viewModeGrid} = propertiesState;
        const indexOfLastPost = currentPage * propertiesPerPage;
        const indexOfFirstPost = indexOfLastPost - propertiesPerPage;
        const currentProperties = properties.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <div className='page-body'>
                {
                    fetchingList ?
                        <h3>Loading...</h3> :
                        properties.length ?
                            <PropertyList
                                properties={currentProperties}
                                viewModeGrid={viewModeGrid}
                                setPropertiesViewMode={this.props.setPropertiesViewMode}
                                selectProperty={this.props.selectProperty}/> :
                            <h3>No data</h3>
                }
                <div style={{marginLeft: '10px'}}>
                    <Pagination
                        postsPerPage={propertiesPerPage}
                        totalPosts={properties.length}
                        currentPage={currentPage}
                        paginate={this.props.setCurrentPage}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        propertiesState,
        readProperties,
        setPropertiesViewMode,
        selectProperty,
        setCurrentPage,
    } = state;
    return {
        propertiesState,
        readProperties,
        setPropertiesViewMode,
        selectProperty,
        setCurrentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        readProperties: () => dispatch({type: PROPERTIES_READ}),
        setPropertiesViewMode: (gridMode) => dispatch({type: SET_PROPERTIES_VIEW_MODE, payload: gridMode}),
        selectProperty: (obj) => dispatch({type: SELECT_PROPERTY, payload: obj}),
        setCurrentPage: (page) => dispatch({type: SET_CURRENT_PAGE, payload: page}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesPage)