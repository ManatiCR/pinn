import React from 'react';
import ComponentFaqsList from './components/ComponentFaqsList'

function AppFaqsList( { api_url, type, title } ) {
  return (
    <div className="App">
      <ComponentFaqsList api_url={ api_url } type={ type } title={ title } />
    </div>
  );
}

export default AppFaqsList;
