import React, { useState } from 'react';
import { calculerHeuresSup } from '../api';

const HeuresSupForm = () => {
  const [employeId, setEmployeId] = useState('');
  const [date, setDate] = useState('');
  const [heuresTravaillees, setHeuresTravaillees] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      employeId: parseInt(employeId), 
      date, 
      heures_travaillees: parseInt(heuresTravaillees)
    };

    const response = await calculerHeuresSup(data);
    setResult(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Employé ID" 
        value={employeId} 
        onChange={(e) => setEmployeId(e.target.value)} 
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Heures travaillées" 
        value={heuresTravaillees} 
        onChange={(e) => setHeuresTravaillees(e.target.value)} 
      />
      <button type="submit">Calculer</button>

      {result && result.success && (
        <div>
          <p>Heures Supplémentaires: {result.heures_supplementaires}</p>
          <p>Rémunération: {result.remuneration_supplementaire} €</p>
        </div>
      )}

      {result && !result.success && (
        <div>
          <p style={{ color: 'red' }}>{result.message}</p>
        </div>
      )}
    </form>
  );
};

export default HeuresSupForm;
