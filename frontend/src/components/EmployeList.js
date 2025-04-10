import React, { useState, useEffect } from "react";
import { getEmployes } from "../api";

const EmployeList = () => {
  const [employes, setEmployes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployes();
        setEmployes(data);
      } catch (error) {
        console.error("Erreur lors du chargement des employés :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Liste des Employés</h2>
      <ul>
        {employes.map((emp) => (
          <li key={emp.id}>
            {emp.nom} - {emp.poste}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeList;
