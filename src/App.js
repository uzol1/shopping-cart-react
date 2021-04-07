import React from 'react'
import './App.css';
import Summary from './Components/summary'
import Items from './Components/Items/items'
import Discount from './Components/Discount/Discount'
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <React.Fragment>
      <Summary />
      <Items />
      <Discount />
    </React.Fragment>
  );
}

export default App;
