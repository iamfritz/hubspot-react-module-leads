import React from 'react';
//import {Link} from 'react-router-dom';

function Button({ buttonLabel, buttonUrl, bClass = '' }) {
  
  var buttonClass = "btn btn-cta b-dark " + bClass;
  return '';
  
  /* return (
    <Link className={buttonClass} to={buttonUrl}>
      {buttonLabel} {buttonUrl} {buttonClass}
      <i className="ml-1 fa fa-arrow-right" aria-hidden="true"></i>
    </Link>
  ); */
}

export default Button;
 