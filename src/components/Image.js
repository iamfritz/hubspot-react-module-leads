import React from 'react';

function Image({ src, alt, cName = '' }) {
  return <img className={cName} src={src} alt={alt} />;
}

export default Image;
 