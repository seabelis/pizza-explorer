import React from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer';
import PizzaDetailsContainer from './components/PizzaDetailsContainer';
import AddPizzaFormContainer from './components/AddPizzaFormContainer';





function App() {
  return (
    <div>
      <PizzaListContainer />
      <PizzaDetailsContainer />
      <AddPizzaFormContainer />
    </div>
  );
}

export default App;
