import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

function Leads({ moduleInstance, moduleData }) {
  return (
    <div className="cms-react-ssd" id={moduleInstance}>
      <div id="ssd-lead" className="custom-module bg-blue text-white py-5">
        <div className="container my-3">
          <div className="row">
            <div className="col-md-2 h-100 my-auto text-left text-sm-center image-col">
              <img
                class="mt-4x"
                src={moduleData.image.src}
                alt={moduleData.image.alt}
                width="88"
                height="129"
              />
            </div>
            <div className="col-md-9">
              <div className="ml-0 mt-2 ml-md-5 pl-md-3 mr-0 mr-md-5 pr-2 pl-0">
                <h2 className="module-title mb-4  mt-5 pt-2 mt-sm-0 pt-sm-0">
                  {moduleData.title}
                </h2>
                <div className="module-content mt-sm-0 pt-sm-0 mt-5 pt-4">
                  {ReactHtmlParser(moduleData.content)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leads;
