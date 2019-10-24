import React from 'react';

import PropertieCard from './PropertieCard';
import styled from 'styled-components';

const PropertieListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default function PropertieList(props) {
  const properties = props.properties;
  const selectPropertie = props.selectPropertie;
  return (
      <div>
        <PropertieListContainer>
          {
            properties.map(function (propertie) {
                  const defaultImage = "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6";
                  var listPrice = 0.00;
                  var monthlyRent = 0.00;
                  var grossYield = 0.00;
                  var imageArrUrl;
                  
                  if (propertie.resources) {
                    imageArrUrl = propertie.resources.photos.map(photo => photo.url);
                  } else {
                    imageArrUrl = [defaultImage]
                  }
                  
                  if (propertie.financial) {
                    listPrice = propertie.financial.listPrice;
                    monthlyRent = propertie.financial.monthlyRent;
                    grossYield = (monthlyRent * 12 / listPrice) * 100;
                  }
                  return <PropertieCard
                      key={propertie.id}
                      title={listPrice > 0 ? listPrice : 'N/A'}
                      subtitle={propertie.address ? propertie.address.address1 : 'N/A'}
                      image={propertie.mainImageUrl ? propertie.mainImageUrl : defaultImage}
                      yearBuilt={propertie.physical ? propertie.physical.yearBuilt : 'N/A'}
                      monthlyRent={monthlyRent > 0 ? monthlyRent : 'N/A'}
                      grossYield={grossYield > 0 ? grossYield : 'N/A'}
                      imageArrUrl={imageArrUrl}
                      selectPropertie={selectPropertie}
                  />;
                }
            )
          }
        </PropertieListContainer>
      </div>
  );
}