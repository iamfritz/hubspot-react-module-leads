import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

function FaqTab({ faqList }) {
  
  function Accordion({ item2, itemIndex }) {
    return (
      <div className="card">
        <div
          className="card-header p-0 border-0 bg-transparent"
          id={'accordion-tab-1-heading-' + itemIndex}
        >
          <a
            className={
              itemIndex != 1
                ? 'btn btn-link w-100 text-left txt-blue Graphik-Semibold-Web collapsed'
                : 'btn btn-link w-100 text-left txt-blue Graphik-Semibold-Web'
            }
            type="button"
            data-toggle="collapse"
            data-target={'#' + faqAccordion + '-content-' + itemIndex}
          >
            <span className="faq-q">Q:</span> {item2.question}
          </a>
        </div>
        <div
          className={itemIndex == 1 ? 'collapse show' : ''}
          id={faqAccordion + '-content-' + itemIndex}
          data-parent={'#' + faqAccordion}
        >
          <div className="card-body pt-0 pl-0 ml-1 mb-2">{item2.answer}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="cms-react-ssd">
      <div className="tab-content" id="faq-tab-content">
        
        {faqList.map(function (item, index) {
          const tab = index + 1;
          const faqAccordion = "faq-tab-"+tab;
          const items = item.faq;
          return (            
            <div className={(tab == 1 ? "show active tab-pane" : "tab-pane") } id={("faq"+tab)} role="tabpanel" >
                <div className="accordion" id={ faqAccordion }>                                                
                    {items.map(function (item2, index) {
                      const itemIndex = index + 1;
                      Accordion(item2, itemIndex);
                    })}
                </div>
            </div>              
          );
        })}
        
      </div>
    </div>
  );
}




export default FaqTab;
