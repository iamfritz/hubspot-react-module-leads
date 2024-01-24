import React from 'react';

const Button = ({ buttonLabel, buttonUrl, bClass = '' }) => {
  var buttonClass = 'btn btn-cta b-dark ' + bClass;

 return (
   <a className={buttonClass} href={buttonUrl}>
     {buttonLabel}
     <i className="ml-1 fa fa-arrow-right" aria-hidden="true"></i>
   </a>
 );
}

export default Button;
 