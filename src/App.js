import React from 'react';
import './App.scss';
import SpinningLogo from './components/SpinningLogo';
import Card from './components/Card';
import reactLogo from './images/logo.svg';
import sprocketLogo from './images/sprocket.svg';

function App({ portalId, moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  return (
    <div className="react_module__container">
      <div className="cms-react-boilerplate__container">
        <div className="spinning-logo__container">
          <SpinningLogo src={reactLogo} alt="react logo" />
          <SpinningLogo
            src={sprocketLogo}
            alt="sprocket logo"
            isSprocket={true}
          />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card initialClickCount={moduleData.initial_count} />
      </div>
      <div
        id="ssd-lead"
        className="custom-module module__{ portalId } bg-blue text-white py-5"
      >
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
                  {moduleData.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
