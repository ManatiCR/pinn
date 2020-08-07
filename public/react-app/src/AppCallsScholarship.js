import React from 'react';
import ComponentCallsScholarship from './components/ComponentCallsScholarship'

function AppCallsScholarship( { api_url } ) {
  return (
    <div className="App">
      <ComponentCallsScholarship api_url={ api_url } />
    </div>
  );
}

export default AppCallsScholarship;
