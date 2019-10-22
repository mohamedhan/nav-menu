import React from 'react';
import './App.css';
import Nav from './component/Nav.js'

const item=[
  {
    items:"Home"
  },
  {
    items:"Service",
    dropdown:["For entrepreneurs","For students","For hobbyists"]
  },
  {
    items:"Contact"
  }
];
function App() {
  return (
    <div className="App">
     
     <Nav  elem={item}/>
    </div>
  );
}

export default App;
