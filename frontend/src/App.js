import React from "react";
import EmployeList from "./components/EmployeList";
import HeuresSupForm from "./components/HeuresSupForm";

function App() {
  return (
    <div>
      <h1>Gestion des Heures Supplémentaires</h1>
      <EmployeList />
      <HeuresSupForm />
    </div>
  );
}

export default App;
