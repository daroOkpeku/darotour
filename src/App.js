import React from 'react';
import './App.scss';
import NavBar from "./components/navbar/navbar"
import Tour from "./components/navbar/tourlist/Tourlist"
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Tour />
    </React.Fragment>
  );
}

export default App;
