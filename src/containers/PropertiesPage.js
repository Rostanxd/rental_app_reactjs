import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropertieList from '../components/PropertieList'
import {PROPERTIES_READ, SELECT_PROPERTIE, SET_CURRENT_PAGE} from "../actions/actionTypes";
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
    const {properties, fetchingList, errorList, currentPage, propertiesPerPage} = propertiesState;
    const indexOfLastPost = currentPage * propertiesPerPage;
    const indexOfFirstPost = indexOfLastPost - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <div className='page-body'>
          {
            fetchingList ?
                <h3>Loading...</h3> :
                properties.length ?
                    <PropertieList
                        properties={currentProperties}
                        selectPropertie={this.props.selectPropertie}/> :
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
    selectPropertie,
    setCurrentPage,
  } = state;
  return {
    propertiesState,
    readProperties,
    selectPropertie,
    setCurrentPage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    readProperties: () => dispatch({type: PROPERTIES_READ}),
    selectPropertie: (obj) => dispatch({type: SELECT_PROPERTIE, payload: obj}),
    setCurrentPage: (page) => dispatch({type: SET_CURRENT_PAGE, payload: page}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesPage)