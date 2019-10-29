import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

import PropertyCard from './PropertyCard';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import Search from '@material-ui/icons/Search';

const PropertyListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function PropertyList(props) {
  const properties = props.properties;
  const viewModeGrid = props.viewModeGrid;
  const setPropertiesViewMode = props.setPropertiesViewMode;
  const classes = useStyles();
  
  const btnListStyle = {
    color: !viewModeGrid ? '#fff' : '#337ab7',
    backgroundColor: viewModeGrid ? '#fff' : '#337ab7'
  };
  
  const btnGridStyle = {
    color: viewModeGrid ? '#fff' : '#337ab7',
    backgroundColor: !viewModeGrid ? '#fff' : '#337ab7'
  };
  return (
      <div>
        <div style={{textAlign: 'right', marginTop: '10px', marginRight: '10px'}}>
          <Button variant="outlined" color="inherit" onClick={() => setPropertiesViewMode(false)} style={btnListStyle}>
            <ListIcon/>
          </Button>
          <Button variant="outlined" color="inherit" onClick={() => setPropertiesViewMode(true)} style={btnGridStyle}>
            <AppsIcon/>
          </Button>
        </div>
        {
          viewModeGrid ?
              <PropertyListContainer>
                {
                  properties.map(function (property) {
                        const defaultImage = "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6";
                        const pathname = '/details/' + property.id;
                        var listPrice = 0.00;
                        var monthlyRent = 0.00;
                        var grossYield = 0.00;
                        var imageArrUrl;
                        
                        if (property.resources) {
                          imageArrUrl = property.resources.photos.map(photo => photo.url);
                        } else {
                          imageArrUrl = [defaultImage]
                        }
                        
                        if (property.financial) {
                          listPrice = property.financial.listPrice;
                          monthlyRent = property.financial.monthlyRent;
                          grossYield = (monthlyRent * 12 / listPrice) * 100;
                        }
                        return <Link key={property.id} to={{
                          pathname: pathname,
                          state: {
                            address: property.address ? property.address.address1 : 'N/A',
                            imageArrUrl: imageArrUrl
                          }
                        }}>
                          <PropertyCard
                              title={listPrice > 0 ? formatter.format(listPrice) : 'N/A'}
                              subtitle={property.address ? property.address.address1 : 'N/A'}
                              image={property.mainImageUrl ? property.mainImageUrl : defaultImage}
                              yearBuilt={property.physical ? property.physical.yearBuilt : 'N/A'}
                              monthlyRent={monthlyRent > 0 ? formatter.format(monthlyRent) : 'N/A'}
                              grossYield={grossYield > 0 ? roundToTwo(grossYield) : 'N/A'}
                              imageArrUrl={imageArrUrl}
                          />
                        </Link>;
                      }
                  )
                }
              </PropertyListContainer> :
              <Paper className={classes.root} style={{marginTop: '10px'}}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" style={{fontWeight: "bold"}}>Image</TableCell>
                      <TableCell align="center" style={{fontWeight: "bold"}}>List Price</TableCell>
                      <TableCell align="center" style={{fontWeight: "bold"}}>Address</TableCell>
                      <TableCell align="center" style={{fontWeight: "bold"}}>Year Built</TableCell>
                      <TableCell align="center" style={{fontWeight: "bold"}}>Monthly Rent</TableCell>
                      <TableCell align="center" style={{fontWeight: "bold"}}>Gross Yield</TableCell>
                      <TableCell align="center" style={{fontWeight: "bold"}}>View</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      properties.map(function (property) {
                            const defaultImage = "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6";
                            const pathname = '/details/' + property.id;
                            var listPrice = 0.00;
                            var monthlyRent = 0.00;
                            var grossYield = 0.00;
                            var imageArrUrl;
                            
                            if (property.resources) {
                              imageArrUrl = property.resources.photos.map(photo => photo.url);
                            } else {
                              imageArrUrl = [defaultImage]
                            }
                            
                            if (property.financial) {
                              listPrice = property.financial.listPrice;
                              monthlyRent = property.financial.monthlyRent;
                              grossYield = (monthlyRent * 12 / listPrice) * 100;
                            }
                            return <TableRow key={property.id}>
                              <TableCell align="center">
                                <img style={{height: '40px'}}
                                     src={property.mainImageUrl ? property.mainImageUrl : defaultImage}/></TableCell>
                              <TableCell
                                  align="left">{listPrice > 0 ? formatter.format(listPrice) : 'N/A'}</TableCell>
                              <TableCell
                                  align="left">{property.address ? property.address.address1 : 'N/A'}</TableCell>
                              <TableCell
                                  align="left">{property.physical ? property.physical.yearBuilt : 'N/A'}</TableCell>
                              <TableCell
                                  align="left">{monthlyRent > 0 ? formatter.format(monthlyRent) : 'N/A'}</TableCell>
                              <TableCell
                                  align="left">{grossYield > 0 ? roundToTwo(grossYield) : 'N/A'}</TableCell>
                              <TableCell align="center">
                                <Link key={property.id} to={{
                                  pathname: pathname,
                                  state: {
                                    address: property.address ? property.address.address1 : 'N/A',
                                    imageArrUrl: imageArrUrl
                                  }
                                }}>
                                  <Search/>
                                </Link>
                              </TableCell>
                            </TableRow>;
                          }
                      )
                    }
                  </TableBody>
                </Table>
              </Paper>
        }
      
      </div>
  );
}

/*  MATH FUNCTIONS */
function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});