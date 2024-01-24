import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import SingleTitle from './SectionSingleTitle';
import Button from './Button';


function Cta({ moduleInstance, moduleData }) {
  return (
    <div className="cms-react-ssd" id={moduleInstance}>
      <div id="ssd-lead-cta" className="custom-module bg-blue text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-lg-2 h-100 my-auto text-left text-sm-center">
              <img
                className="mt-4x module-icon"
                src={moduleData.image.src}
                alt={moduleData.image.alt}
                width="71"
                height="95"
              />
            </div>
            <div className="col-md-9 col-lg-7">
              <div className="h-100 my-auto ml-0 ml-md-4">
                <SingleTitle title={moduleData.title} />

                <div className="module-content Graphik-Semibold-Web mt-sm-0 pt-sm-0 mt-5 pt-4">
                  {ReactHtmlParser(moduleData.content)}
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 h-100 my-auto text-center text-sm-right">
              <Button buttonLabel={moduleData.button.button_label} buttonUrl={moduleData.button.button_url.url.href} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
