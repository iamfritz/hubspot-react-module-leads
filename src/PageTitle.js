import React from 'react';
import './App.scss';

import PageTitle from './components/PageTitle';

function App({ portalId, moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'PageTitle:: all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  return (
    <div className="react_module__container">
      <PageTitle name={portalId} moduleData={moduleData} />
    </div>
  );
}

export default App;
