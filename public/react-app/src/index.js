import React from 'react';
import ReactDOM from 'react-dom';
import AppCallsScholarship from './AppCallsScholarship';
import AppList from './AppList';
import AppFaqsList from './AppFaqsList';
import * as serviceWorker from './serviceWorker';

const api_url = "https://ops829p-ttp.pantheonsite.io/pinn";
const component_scholarship_bootcamps = `${api_url}/scholarships?component=30`;
const component_scholarship_internationals = `${api_url}/scholarships?component=31`;
const component_scholarship_nationals = `${api_url}/scholarships?component=32`;
const component_scholarship_documents = `${api_url}?component=33`;
const component_scholarship_steps = `${api_url}?component=34`;
const component_faq_scholarships = `${api_url}?component=35`;
const component_faq_providers = `${api_url}?component=36`;

ReactDOM.render(
  <React.StrictMode>
    <AppCallsScholarship api_url={ component_scholarship_bootcamps } />
  </React.StrictMode>,
  document.getElementById('react-app-calls-scholarship-bootcamps')
);

ReactDOM.render(
  <React.StrictMode>
    <AppCallsScholarship api_url={ component_scholarship_internationals } />
  </React.StrictMode>,
  document.getElementById('react-app-calls-scholarship-internationals')
);

ReactDOM.render(
  <React.StrictMode>
    <AppCallsScholarship api_url={ component_scholarship_nationals } />
  </React.StrictMode>,
  document.getElementById('react-app-calls-scholarship-nationals')
);

ReactDOM.render(
  <React.StrictMode>
    <AppList api_url={ component_scholarship_documents } type="unordered" />
  </React.StrictMode>,
  document.getElementById('react-app-calls-scholarship-documents')
);

ReactDOM.render(
  <React.StrictMode>
    <AppList api_url={ component_scholarship_steps } type="ordered" />
  </React.StrictMode>,
  document.getElementById('react-app-calls-scholarship-steps')
);

ReactDOM.render(
  <React.StrictMode>
    <AppFaqsList api_url={ component_faq_scholarships } type="ordered" title="Oportunidades de Beca" />
  </React.StrictMode>,
  document.getElementById('react-app-faqs-scholarships')
);

ReactDOM.render(
  <React.StrictMode>
    <AppFaqsList api_url={ component_faq_providers } type="ordered" title="Proveedores" />
  </React.StrictMode>,
  document.getElementById('react-app-faqs-providers')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
