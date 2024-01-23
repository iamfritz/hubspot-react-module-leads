import React from 'react';
import './App.scss';

import PageTitle from './components/PageTitle';
import Leads from './components/Leads';
import Cta from './components/Cta';
import Faq from './components/Faqs';

function App({ moduleInstance, moduleName, moduleData }) {

  switch (moduleName) {
    case 'PageTitle':
      return <PageTitle moduleInstance={moduleInstance} moduleData={moduleData} />;
    case 'Leads':
      return <Leads moduleInstance={moduleInstance} moduleData={moduleData} />;
    case 'Cta':
      return <Cta moduleInstance={moduleInstance} moduleData={moduleData} />;
    case 'Faqs':
      return <Faq moduleInstance={moduleInstance} moduleData={moduleData} />;
    default:
      return null;
  }

}

export default App;
