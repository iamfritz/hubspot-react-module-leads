import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import SectionTitle from './SectionTitle';
import FaqTab from './FaqsTab';

function Faqs({ moduleInstance, moduleData }) {
  console.table(moduleData);

  let faqList = moduleData.faqs;

  return (
    <div className="cms-react-ssd" id={moduleInstance}>
      <div
        id="ssd-faq"
        class="custom-module txt-blue py-5 text-left Graphik-Regular-Web bg-lighterGray"
      >
        <SectionTitle title={moduleData.title} subtitle={moduleData.subtitle} />

        <div class="container pt-0 pt-sm-5 mb-5">
          <div id="faqs" class="row">
            <div class="col-md-3">
              <div class="dropdown mb-4" id="faqmobilemenu">
                <a
                  class="d-block d-md-none btn dropdown-toggle w-100 text-left p-3"
                  href="#"
                  role="button"
                  id="faqMenu"
                  data-toggle="dropdown"
                >
                  FAQ ...
                </a>

                <div class="dropdown-menu w-100 txt-blue py-0">
                  <div
                    class="nav nav-pills faq-nav flex-sm-column"
                    id="faq-tabs2"
                    role="tablist"
                  >
                      {faqList.map(function(item, index) {
                        
                        return (
                          <a
                            href={"#faq"+index}
                            className={
                              (index == 0 ? ' active' : '') +
                              ' w-100 d-block nav-link Graphik-Semibold-Web txt-blue'
                            }
                            data-toggle="pill"
                            role="tab"
                          >
                            {item.category}
                          </a>
                        );
                      })}                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <FaqTab faqList={faqList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
