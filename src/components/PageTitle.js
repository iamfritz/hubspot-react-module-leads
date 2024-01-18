import React, { useState } from 'react';

function PageTitle({ moduleInstance, moduleData }) {
  return (
    <div className="cms-react-ssd" id={moduleInstance}>
      <div
        id="ssd-share-page-title"
        className="custom-module bg-blue txt-white"
      >
        <div
          className="container"
          style={{
            backgroundImage: 'url(' + moduleData.image.src + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '99%',
            backgroundSize: 'contain',
          }}
        >
          <div className="row py-4">
            <div className="col-md-12">
              <span className="module-subtitle txt-green Graphik-Semibold-Web d-block mt-2">
                {moduleData.subtitle}
              </span>
              <h1 className="module-title txt-white Graphik-Semibold-Web mt-4 mt-sm-2">
                {moduleData.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;

/* import React, { useState } from 'react';

function PageTitle({ name, moduleData }) {
  
  return (
    <div className="cms-react-ssd">
 
      <div id="ssd-share-page-title" className="custom-module module__{ name } bg-blue txt-white" >
        <div className="container" style="background: url({moduleData.image.src }) no-repeat; background-position: 99%; background-size: contain;">
          <div className="row py-4"  >
            <div className="col-md-12">
              <span className="module-subtitle txt-green Graphik-Semibold-Web d-block mt-2">{moduleData.subtitle }</span> 
              <h1 className="module-title txt-white Graphik-Semibold-Web mt-4 mt-sm-2">
                {moduleData.title }
              </h1> 
            </div>  
          </div>
        </div> 
      </div>
      
    </div>
  );
}

export default PageTitle;
 */
