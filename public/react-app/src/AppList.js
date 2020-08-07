import React from 'react';
import ComponentList from './components/ComponentList'

function AppList( { api_url, type } ) {
  return (
    <div className="App">
      <ComponentList api_url={ api_url } type={ type } />
    </div>
  );
}

export default AppList;
