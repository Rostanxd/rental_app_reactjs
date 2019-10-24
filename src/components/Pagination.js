import React from 'react';
import {makeStyles} from "@material-ui/core";

const Pagination = ({
                      postsPerPage: propertiesPerPage,
                      totalPosts: totalProperties,
                      currentPage: currentPage,
                      paginate
                    }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalProperties / propertiesPerPage); i++) {
    pageNumbers.push(i);
  }
  
  const useStyles = makeStyles({
    pagination: {
      display: 'inline-block',
      paddingLeft: '0',
      margin: '20px 0',
      borderRadius: '4px',
    },
    pageItem: {
      display: 'inline',
      boxSizing: 'border-box',
      textAlign: 'center',
      fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
      fontSize: '14px',
      lineHeight: '1.42857143',
      color: '#333',
    },
    pageLink: {
      marginLeft: '0',
      borderBottomLeftRadius: '4px',
      borderTopLeftRadius: '4px',
      position: 'relative',
      float: 'left',
      padding: '6px 12px',
      lineHeight: '1.42857143',
      textDecoration: 'none',
      color: '#337ab7',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
    },
    pageLinkSel: {
      marginLeft: '0',
      borderBottomLeftRadius: '4px',
      borderTopLeftRadius: '4px',
      position: 'relative',
      float: 'left',
      padding: '6px 12px',
      lineHeight: '1.42857143',
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: '#337ab7',
      border: '1px solid #ddd',
    }
  });
  
  const classes = useStyles();
  
  const handleEvent = (e, number) => {
    e.preventDefault();
    paginate(number);
  };
  
  return (
      <nav>
        <ul className={classes.pagination}>
          {pageNumbers.map(number => (
              <li key={number} className={classes.pageItem}>
                <a onClick={(e) => handleEvent(e, number)} href='#!'
                   className={number === currentPage ? classes.pageLinkSel : classes.pageLink}>
                  {number}
                </a>
              </li>
          ))}
        </ul>
      </nav>
  );
};

export default Pagination;