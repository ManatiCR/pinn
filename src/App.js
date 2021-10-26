import React from 'react';
import './sass/_index.scss';
import Menu from "./components/Menu";
import Heading from "./components/Heading";
import Closing from "./components/Closing";

function App() {
  const apiUrl = "https://www.thetalentplace.cr/pinn";

  return (
    <>
      <Menu />
      <Heading />
      <Closing />
    </>
  );
}
export default App;
